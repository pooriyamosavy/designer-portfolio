"use client";

import { ArrowRight } from "lucide-react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useRef } from "react";

export default function BehindTheScreens() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0.3, 0.7],
    [100, 0]
  );
  const backgroundPositionYValue = useMotionTemplate`0% ${backgroundPositionY}%`;

  return (
    <div
      ref={ref}
      className="relative bg-[#08041F] md:py-[100px] py-8 md:px-20 px-4 text-white"
    >
      <div className="sticky left-0 top-30 hidden md:block">
        <ArrowRight size={40} color="#C3B9FC" />
      </div>
      <div className="flex justify-between relative md:-top-20 top-0">
        <div className="size-[40px]"></div>
        <div className="max-w-[1050px] flex flex-col gap-[54px]">
          <motion.div
            style={{
              backgroundPosition: backgroundPositionYValue,
              backgroundImage:
                "linear-gradient(0deg, #735AFF 30%, #E2DFFF 45%, #E2DFFF 55%, #735AFF 70%)",
            }}
            className="md:text-[48px] text-[24px] bg-[length:100%_200%] bg-no-repeat bg-clip-text text-transparent font-bold"
          >
            Your users deserve interfaces that feel effortless. I turn research
            insights into designs that increase engagement, reduce friction, and
            drive growth. Ready to elevate your product?
          </motion.div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-start">
            <h2 className="md:text-[24px] text-[16px] font-bold">
              Behind the Screens
            </h2>
            <div className="flex flex-col max-w-[600px] gap-4">
              <h3 className="md:text-[18px] text-[16px]">UI/UX Designer</h3>
              <p className="text-[#C3B9FC]">
                I’m a UI/UX designer who turns complex challenges into clear,
                engaging experiences. With several years of hands‑on work in
                research, wireframing, and visual design, I build interfaces
                that users instinctively understand and enjoy. I thrive on
                collaboration, listening closely to stakeholders to deliver
                solutions that align with your goals—and exceed your
                expectations. Let’s craft something memorable together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
