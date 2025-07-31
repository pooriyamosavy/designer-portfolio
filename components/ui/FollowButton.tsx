"use client";

import React, { PropsWithChildren, useRef } from "react";

type Props = PropsWithChildren;

export default function FollowButton({ children }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const wrapper = wrapperRef.current;
    const button = buttonRef.current;
    if (!wrapper || !button) return;

    const rect = wrapper.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const distance = Math.hypot(x, y);
    const threshold = 150; // increase for longer range

    if (distance < threshold) {
      const strength = 0.9 * (1 - distance / threshold); // falloff
      button.style.transform = `translate(${x * strength}px, ${
        y * strength
      }px)`;
    } else {
      button.style.transform = "translate(0, 0)";
    }
  };

  const resetTransform = () => {
    const button = buttonRef.current;
    if (button) button.style.transform = "translate(0, 0)";
  };

  return (
    <div
      ref={wrapperRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTransform}
      className="inline-block relative"
    >
      <div className="absolute -inset-10 md:block hidden" />
      <div ref={buttonRef}>{children}</div>
    </div>
  );
}
