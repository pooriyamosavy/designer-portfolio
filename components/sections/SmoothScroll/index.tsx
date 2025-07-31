"use client";

import "lenis/dist/lenis.css";
import ReactLenis, { useLenis } from "lenis/react";

export default function SmoothScrollProvider() {
  useLenis();
  return <ReactLenis root />;
}
