import { useEffect, useRef } from "react";

export function InteractiveGrid() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    const styles = getComputedStyle(document.documentElement);
    const cyan = styles.getPropertyValue("--primary").trim();
    const emerald = styles.getPropertyValue("--secondary").trim();
    let w = 0, h = 0, raf = 0;
    const mouse = { x: -9999, y: -9999 };
    const ripples: { x: number; y: number; r: number }[] = [];
    let nodes: { x: number; y: number }[] = [];
    const gap = 36;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      nodes = [];
      for (let x = gap / 2; x < w; x += gap) for (let y = gap / 2; y < h; y += gap) nodes.push({ x, y });
    };
    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      const nx = e.clientX - r.left, ny = e.clientY - r.top;
      if (Math.hypot(nx - mouse.x, ny - mouse.y) > 60) ripples.push({ x: nx, y: ny, r: 0 });
      mouse.x = nx; mouse.y = ny;
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const R = 170;
      const near: { x: number; y: number; d: number }[] = [];
      for (const n of nodes) {
        const d = Math.hypot(n.x - mouse.x, n.y - mouse.y);
        const t = Math.max(0, 1 - d / R);
        ctx.fillStyle = t > 0 ? `color-mix(in oklab, ${cyan} ${Math.round(t * 100)}%, transparent)` : "oklch(1 0 0 / 0.07)";
        ctx.beginPath(); ctx.arc(n.x, n.y, 1 + t * 2, 0, Math.PI * 2); ctx.fill();
        if (t > 0.35) near.push({ ...n, d: t });
      }
      ctx.lineWidth = 0.6;
      for (const n of near) {
        ctx.strokeStyle = `color-mix(in oklab, ${emerald} ${Math.round(n.d * 70)}%, transparent)`;
        ctx.beginPath(); ctx.moveTo(mouse.x, mouse.y); ctx.lineTo(n.x, n.y); ctx.stroke();
      }
      for (let i = ripples.length - 1; i >= 0; i--) {
        const rp = ripples[i]!; rp.r += 2.2;
        const a = Math.max(0, 1 - rp.r / 140);
        ctx.strokeStyle = `color-mix(in oklab, ${cyan} ${Math.round(a * 50)}%, transparent)`;
        ctx.beginPath(); ctx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2); ctx.stroke();
        if (a <= 0) ripples.splice(i, 1);
      }
      raf = requestAnimationFrame(draw);
    };

    resize(); draw();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); window.removeEventListener("mousemove", onMove); };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 h-full w-full" aria-hidden />;
}
