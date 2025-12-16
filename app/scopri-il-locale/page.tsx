"use client";

import { ImageGallery } from "@/components/ui/image-gallery";

export default function ScopriIlLocale() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_rgba(210,75,56,0.15),_transparent_40%),radial-gradient(ellipse_at_bottom,_rgba(226,139,63,0.12),_transparent_40%)]" />

      <ImageGallery />
    </div>
  );
}
