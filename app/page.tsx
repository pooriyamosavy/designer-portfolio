"use server";

import BehindTheScreens from "@/components/sections/BehindTheScreens";
import Hero from "@/components/sections/Hero";
import Nav from "@/components/sections/Nav";
import ReachOut from "@/components/sections/ReachOut";
import Showcase from "@/components/sections/Showcase";
import Skill from "@/components/sections/Skill";

export default async function Page() {
  return (
    <>
      <Nav />
      <Hero />
      <Showcase />
      <BehindTheScreens />
      <Skill />
      <ReachOut />
    </>
  );
}
