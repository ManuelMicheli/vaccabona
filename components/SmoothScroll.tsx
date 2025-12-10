// Deprecated: Lenis smooth scroll was replaced by LocomotiveScroll.
// Keeping the file to avoid import errors if referenced, but it now
// simply renders children without side effects.
"use client";

import { ReactNode } from "react";

// Deprecated placeholder. Use LenisScroll instead.
export default function SmoothScroll({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

