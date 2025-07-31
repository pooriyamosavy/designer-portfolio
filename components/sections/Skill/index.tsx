"use server";

import Image from "next/image";
import React from "react";

const Skills = [
  {
    number: "/skillNumber/01.svg",
    title1: "Design",
    title2: "Skills",
    desc: "I design with purpose — from wireframes to polished visuals, building responsive, accessible, mobile-first experiences backed by smart design systems.",
    img: "/skills/DesignSkill.svg",
  },
  {
    number: "/skillNumber/02.svg",
    title1: "UX",
    title2: "Skills",
    desc: "I craft meaningful experiences through user research, journey mapping, and design thinking — shaping flows, personas, and information structures that truly connect.",
    img: "/skills/UxSkill.svg",
  },
  {
    number: "/skillNumber/03.svg",
    title1: "Tools",
    desc: "I design and prototype with Figma, Adobe XD, and Illustrator, while collaborating seamlessly using Miro and FigJam.",
    img: "/skills/Tool.svg",
  },
  {
    number: "/skillNumber/04.svg",
    title1: "Soft",
    title2: "Skills",
    desc: "Designing with empathy, thinking with clarity, and working with people — that’s how I turn ideas into impact.",
    img: "/skills/SoftSkill.svg",
  },
];

export default async function Skill() {
  return (
    <div className="bg-gradient-to-b relative from-[#08041F] from-0% via-[#311ABF] via-50% to-[#08041F] to-100% py-[100px]">
      <div className="bg-size md:text-[39px] text-[28px] text-center bg-gradient-to-r from-[#735AFF] from-20% to-[#E2DFFF] bg-clip-text text-transparent font-bold">
        UI/UX Skills Summary
      </div>

      <div className="md:mt-[20px] mt-[50px] space-y-10 px-4">
        {Skills.map(({ desc, img, number, title1, title2 }, index) => {
          return (
            <div
              key={index}
              className="p-10 max-w-[1100px] mx-auto rounded-[50px] flex items-center gap-2 sticky top-20"
              style={{
                background: "linear-gradient(66deg, #040111 0%, #2D18AC 100%)",
              }}
            >
              <div className="md:w-1/2 flex flex-col gap-5 text-white">
                <Image
                  alt=""
                  src={number}
                  width={300}
                  height={300}
                  className="size-10"
                />
                <div className="md:text-[65px] text-[30px] font-bold md:leading-[80%] leading-[100%]">
                  <h2>{title1}</h2>
                  {title2 && (
                    <div className="relative w-min">
                      <span className="relative z-10">{title2}</span>
                      <div className="absolute -inset-x-2 bottom-0 top-3/5 bg-[#FAA381] rounded-full" />
                    </div>
                  )}
                </div>
                <p className="text-[14px]">{desc}</p>
              </div>
              <Image
                alt=""
                src={img}
                width={1000}
                height={1000}
                className="w-1/2 hidden md:block"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
