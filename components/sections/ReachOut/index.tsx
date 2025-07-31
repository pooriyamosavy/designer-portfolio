"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import AnimatedGradientText from "@/components/ui/AnimatedGradientText";

export default function ReachOut() {
  const [isMobile, setIsMobile] = useState(true);
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

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div
      id="contact"
      onMouseMove={!isMobile ? handleMouseMove : undefined}
      className="bg-[#08041F] relative md:p-[50px] h-screen text-white flex items-center justify-center overflow-hidden"
    >
      <motion.div
        ref={cardRef}
        style={
          isMobile
            ? {}
            : {
                x: translateX,
                y: translateY,
              }
        }
        className="w-full md:h-full max-md:h-[500px] rounded-[50px] flex flex-col justify-center md:px-[50px] max-md:p-8 transition-transform duration-200 ease-out"
      >
        <div
          className="size-full rounded-[50px] flex flex-col justify-center"
          style={{
            backgroundImage: "linear-gradient(61deg, #190791 0%, #735AFF 100%)",
          }}
        >
          <h2 className="md:text-[90px] text-[28px] font-bold text-center leading-[100%]">
            Reach <span className="text-[#FA8B54]">Out</span>
          </h2>
          <div className="flex items-center md:text-[32px] text-[20px] gap-[20px] font-bold mx-auto text-center w-fit">
            <h2>where your vision becomes design</h2>
            <div className="relative md:block hidden">
              <span className="relative z-10 md:text-[52px] text-[20px]">
                Design
              </span>
              <div className="absolute -inset-x-2 inset-y-6 bg-[#4122FF] rounded-full" />
            </div>
          </div>
          <Image
            alt="path"
            src="/path.svg"
            width={300}
            height={300}
            className="mx-auto md:translate-x-4/5 translate-x-4/5 max-md:size-[100px]"
          />
          <div className="relative md:-top-4 flex flex-col items-center">
            <a
              className="text-center md:text-[64px] text-[18px]"
              href="mailto:Fateme.khoshnudi81@gmail.com"
            >
              <AnimatedGradientText text="Fateme.khoshnudi81@gmail.com" />
            </a>
            <div className="bg-size text-center mt-[25px] md:text-[24px] text-[12px] bg-gradient-to-r from-[#735AFF] from-20% to-[#E2DFFF] bg-clip-text text-transparent font-bold">
              your message shapes the future
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
