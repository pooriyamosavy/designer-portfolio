"use server";

import AnimatedGradientText from "@/components/ui/AnimatedGradientText";
import HoverCircleButton from "@/components/ui/HoverCircleButton";
import FollowButton from "@/components/ui/FollowButton";
import React from "react";

export default async function Nav() {
  return (
    <div className="absolute z-20 top-[23px] inset-x-0 flex items-center justify-between px-[96px]">
      <AnimatedGradientText text="UI UX Designer" />
      <FollowButton>
        <HoverCircleButton title="Contact me" />
      </FollowButton>
    </div>
  );
}
