"use server";

import AnimatedGradientText from "@/components/ui/AnimatedGradientText";
import HoverCircleButton from "@/components/ui/HoverCircleButton";
import FollowButton from "@/components/ui/FollowButton";
import React from "react";

export default async function Nav() {
  return (
    <div className="absolute z-20 top-[23px] inset-x-0 flex items-center justify-between md:px-[96px] px-4">
      <div className="text-[12px]">
        <AnimatedGradientText text="UI UX Designer" />
      </div>
      <FollowButton>
        <a href={"#contact"}>
          <HoverCircleButton title="Contact me" />
        </a>
      </FollowButton>
    </div>
  );
}
