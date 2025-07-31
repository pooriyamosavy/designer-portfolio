"use server";

import HoverCircleButton from "@/components/ui/HoverCircleButton";
import ParticlesBG from "./_comp/ParticlesBG";

export default async function Hero() {
  return (
    <div className="h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#4122FF] to-black">
        <ParticlesBG />
      </div>
      <div className="relative z-10 flex flex-col justify-center items-center size-full">
        <div className="bg-gradient-to-r from-[#120083] to-[#4122FF] flex items-center gap-2 text-white md:text-[18px] text-base h-[46px] px-4 rounded-full">
          <div className="relative size-[12px]">
            <div className="bg-[#FAA381] size-[12px] rounded-full absolute inset-0 animate-ping animation-duration-[2000ms]" />
            <div className="bg-[#FAA381] size-[12px] rounded-full absolute inset-0" />
          </div>
          Fateme Khoshnudi
        </div>
        <div className="text-white md:text-[72px] text-[32px] text-center mt-10">
          <h2>Not just pixels</h2>
          <h2 className="flex items-center gap-2">
            I
            <div className="relative">
              <span className="relative z-10  leading-[100%]">
                design experiences
              </span>
              <div className="absolute -inset-x-2 bottom-1/6 top-3/5 bg-[#FAA381] rounded-full" />
            </div>
          </h2>
        </div>
        <div className="flex flex-col items-center gap-5">
          <h2 className="text-[#B4B4B4] text-sm mt-10">
            From first tap to final wow
          </h2>
          <HoverCircleButton title="show case" />
        </div>
      </div>
    </div>
  );
}
