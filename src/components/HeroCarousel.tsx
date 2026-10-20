import { useEffect, useState } from "react";
import image1 from "@/assets/image1.jpg";
import image2 from "@/assets/image2.jpg";
import image3 from "@/assets/image3.jpg";

const IMAGES = [image1, image2, image3];

export function HeroCarousel() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % IMAGES.length), 3000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-border bg-card shadow-glow">
      {IMAGES.map((src, idx) => (
        <img key={src} src={src} alt="" width={800} height={1008}
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${idx === i ? "scale-100 opacity-100" : "scale-105 opacity-0"}`} />
      ))}
      <div className="absolute inset-x-0 bottom-0 flex gap-2 p-4">
        {IMAGES.map((_, idx) => (
          <div key={idx} className="h-1 flex-1 overflow-hidden rounded-full bg-foreground/20">
            {idx === i && <div key={i} className="h-full w-full bg-accent-gradient animate-progress" />}
            {idx < i && <div className="h-full w-full bg-foreground/60" />}
          </div>
        ))}
      </div>
    </div>
  );
}
