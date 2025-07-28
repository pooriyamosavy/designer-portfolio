"use server";

import HoverCircleButton from "@/components/ui/HoverCircleButton";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const showcase = [
  {
    title: "Wherecy (app-desktop)",
    img: "/showcase/Wherecy.png",
    placement: "right",
  },
  {
    title: "Safir (Super app)",
    img: "/showcase/Safir.png",
    placement: "center",
  },
  {
    title: "Stylogy (app)",
    img: "/showcase/Stylogy.png",
    placement: "center",
  },
];

export default async function Showcase() {
  return (
    <div className="bg-gradient-to-b from-black from-0% to-[#08041F] to-25% py-[100px] min-h-screen relative z-10">
      <div className="text-center">
        <div className="bg-size text-[39px] bg-gradient-to-r from-[#735AFF] from-20% to-[#E2DFFF] bg-clip-text text-transparent font-bold">
          SHOWCASE
        </div>
        <h2 className="text-[18px] text-[#B4B4B4]">A glimpse into my work</h2>
      </div>
      <div className="flex gap-4 px-6 max-w-[1300px] mx-auto pt-10">
        {showcase.map(({ img, placement, title }, index) => (
          <div
            className="w-full relative overflow-hidden hover:w-[130%] bg-[#1A202C] transition-all duration-[3000ms] h-[700px] rounded-[50px]"
            key={index}
          >
            <Image
              alt=""
              src={img}
              width={placement === "center" ? 238 : 341}
              height={placement === "center" ? 488 : 408}
              className={cn("absolute z-10 top-1/2 -translate-y-1/2", {
                "left-1/2 -translate-x-1/2": placement === "center",
                "right-0": placement === "right",
              })}
            />
            <div className="absolute top-[25px] right-[20px] size-[70px] rounded-full bg-neutral-400 flex justify-center items-center">
              <ArrowUpRight size={40} />
            </div>
            <div className="absolute bottom-10 inset-x-10 text-white z-20">
              <h6 className="text-[15px]">Ui UX</h6>
              <h2 className="text-[28px]">{title}</h2>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t z-10 from-[#050312] to-transparent" />
          </div>
        ))}
      </div>

      <div className="max-w-[241px] mx-auto mt-10">
        <HoverCircleButton title="See all" />
      </div>
    </div>
  );
}
