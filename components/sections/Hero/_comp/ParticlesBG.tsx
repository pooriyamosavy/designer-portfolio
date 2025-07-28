"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { loadLightInteraction } from "@tsparticles/interaction-light";
import { heroOptions } from "../static";

export default function ParticlesBG() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadLightInteraction(engine);
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  if (!init) {
    return <></>;
  }
  return (
    <Particles id="tsparticles" options={heroOptions} className="static" />
  );
}
