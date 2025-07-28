"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function ReachOut() {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const translateX = useTransform(mouseX, [0, 1], [-15, 15]);
  const translateY = useTransform(mouseY, [0, 1], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    const x = (e.clientX - (rect?.left || 0)) / (rect?.width || 0);
    const y = (e.clientY - (rect?.top || 0)) / (rect?.height || 0);

    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="bg-[#08041F] relative p-[50px] h-screen text-white flex items-center justify-center overflow-hidden"
    >
      <motion.div
        ref={cardRef}
        style={{
          x: translateX,
          y: translateY,
        }}
        className="w-full size-full rounded-[50px] flex flex-col justify-center px-[50px] transition-transform duration-200 ease-out"
      >
        <div
          className="size-full rounded-[50px] flex flex-col justify-center"
          style={{
            backgroundImage: "linear-gradient(61deg, #190791 0%, #735AFF 100%)",
          }}
        >
          <h2 className="text-[90px] font-bold text-center leading-[100%]">
            Reach <span className="text-[#FA8B54]">Out</span>
          </h2>
          <div className="flex items-center text-[32px] gap-[20px] font-bold mx-auto text-center w-fit">
            <h2>where your vision becomes design</h2>
            <div className="relative">
              <span className="relative z-10 text-[52px]">Design</span>
              <div className="absolute -inset-x-2 inset-y-6 bg-[#4122FF] rounded-full" />
            </div>
          </div>
          <Image
            alt="path"
            src="/path.svg"
            width={300}
            height={300}
            className="mx-auto translate-x-4/5"
          />
          <div className="relative -top-10 flex flex-col items-center">
            <div className="bg-size text-center text-[24px] bg-gradient-to-r from-[#735AFF] from-20% to-[#E2DFFF] bg-clip-text text-transparent font-bold">
              your message shapes the future
            </div>
            <a
              className="text-center text-[64px] underline mt-[25px]"
              href="mailto:Fateme.khoshnudi81@gmail.com"
            >
              Fateme.khoshnudi81@gmail.com
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
