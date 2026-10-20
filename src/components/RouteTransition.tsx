import { useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export function RouteTransition() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const first = useRef(true);
  const [key, setKey] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (first.current) { first.current = false; return; }
    setKey((k) => k + 1);
    setShow(true);
    const t = setTimeout(() => setShow(false), 700);
    return () => clearTimeout(t);
  }, [pathname]);

  if (!show) return null;
  return (
    <div key={key} className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm animate-veil">
      <div className="relative h-24 w-24">
        <div className="absolute inset-0 rounded-md border-2 border-primary animate-geo" />
        <div className="absolute inset-4 rounded-full border-2 border-secondary animate-geo [animation-delay:80ms]" />
        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-glow animate-geo [animation-delay:160ms]" />
        <div className="absolute -left-6 top-1/2 h-2 w-2 rounded-full bg-secondary animate-geo [animation-delay:120ms]" />
        <div className="absolute -right-6 top-1/2 h-2 w-2 rounded-full bg-primary animate-geo [animation-delay:200ms]" />
      </div>
    </div>
  );
}
