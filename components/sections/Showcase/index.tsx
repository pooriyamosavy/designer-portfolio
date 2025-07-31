"use client";

import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef, useState } from "react";

const showcase = [
  {
    title: "Safir (Super app)",
    img: "/showcase/Safir.png",
    placement: "center",
    link: "https://www.figma.com/proto/AUgUmdNicEVl2pFxrTxpZV/zarbakhsh-project-Copy?node-id=10008-17395&p=f&viewport=34%2C194%2C0.02&t=THxDleDclEVGt1Ns-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=10108%3A5382&show-proto-sidebar=1",
  },
  {
    title: "Wherecy (app-desktop)",
    img: "/showcase/Wherecy.png",
    placement: "right",
    link: "https://www.figma.com/proto/MWIb5598tE2qxM6SGbhn6b/rajayi-safir-Copy?node-id=11124-8693&p=f&viewport=-984%2C657%2C0.05&t=ixlCudd7xEPz7Fyi-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=11583%3A10913&show-proto-sidebar=1",
  },
  {
    title: "Stylogy (app)",
    img: "/showcase/Stylogy.png",
    placement: "center",
    link: "https://www.figma.com/proto/gFnuZx4BO4BW8x5BZ86RG1/daneshvar-ravanshenasi-Copy?node-id=10008-17395&p=f&viewport=2897%2C-684%2C0.45&t=GI0PqNkN5kO6QEXv-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=13010%3A1402",
  },
  {
    title: "Eccomerce (app-desktop)",
    img: "/showcase/Eccomerce.png",
    placement: "left",
    link: "https://www.figma.com/proto/sJk0u78fiZivgPSVL2foAq/fereydooni-ecomerce-Copy?node-id=10-36&p=f&viewport=1601%2C-29%2C0.04&t=Rsz3pMsaGlPspx19-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=13275%3A29835&show-proto-sidebar=1",
  },
  {
    title: "Tam Tam (2 panel)",
    img: "/showcase/TamTam.png",
    placement: "center",
    link: "https://www.figma.com/proto/rSmDuP8jK68QRXPXyPvnQP/ahmadi-bread-Copy?node-id=14138-4705&p=f&viewport=112%2C106%2C0.04&t=17KuesZiVU4XsBNF-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=14138%3A5514&show-proto-sidebar=1",
  },
  {
    title: "Prop (Desktop)",
    img: "/showcase/Prop.png",
    placement: "left",
    link: "https://www.figma.com/proto/WTc7pbrJEceSDFcxmAx8ag/rostami-odx-Copy?node-id=13022-5250&p=f&viewport=257%2C551%2C0.02&t=i7dTmCqUopN7EWz0-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=15039%3A23405",
  },
  {
    title: "ABI Restaurant (2 Panel)",
    img: "/showcase/ABI-Restaurant.png",
    placement: "left",
    link: "https://www.figma.com/proto/QYbLkwk2PImJor1lm0eJ8s/bigdeli-ABi-website-design-Copy?node-id=8108-42874&p=f&viewport=950%2C428%2C0.02&t=ztWgZDjf714n6cCh-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=8342%3A67624&show-proto-sidebar=1",
  },
  {
    title: "Moto Meet (App)",
    img: "/showcase/MotoMeet.png",
    placement: "center",
    link: "https://www.figma.com/proto/xXkdI2PumoZqEtmYc38ga5/MotoMeet?node-id=9001-28092&p=f&viewport=385%2C264%2C0.03&t=x4gWUk5r88cGtff1-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=16019%3A19858",
  },
  {
    title: "DLTex (Desktop)",
    img: "/showcase/DLTex.png",
    placement: "left",
    link: "https://www.figma.com/proto/ln0zvCLel46negSttKFACi/alizade-exchange-Copy?node-id=11124-8693&p=f&viewport=534%2C261%2C0.03&t=OxKulMRLYZuXn4s8-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=18189%3A6469",
  },
  {
    title: "Tourism (2 Panel)",
    img: "/showcase/Tourism.png",
    placement: "center",
    link: "https://www.figma.com/proto/LUZ5rrgGbx6mwWEd5js5Vv/hosseini-tourism-Copy?node-id=939-5330&p=f&viewport=122%2C30%2C0.03&t=RTrLSidXBdrNvTzM-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=940%3A11455&show-proto-sidebar=1",
  },
  {
    title: "Odinex (Desktop - App)",
    img: "/showcase/Odinex.png",
    placement: "left",
    link: "https://www.figma.com/proto/qYLuJNCkhAALFalOR1glUc/sojodi-odinex-Copy?node-id=9001-28092&p=f&viewport=462%2C-498%2C0.08&t=4bdsjphw5PwdmI6q-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=9005%3A8713",
  },
  {
    title: "Match Point (2 Panel-2 Size)",
    img: "/showcase/MatchPoint.png",
    placement: "center",
    link: "https://www.figma.com/proto/OQhsuv81Rl2v7BUOVGfQXt/adeli-matchpoint-Copy?node-id=159-11981&p=f&viewport=791%2C2241%2C0.12&t=GObcVAHw0HuS0xRN-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1116%3A36367",
  },
  {
    title: "Dandunet (2 Panel-2 Size)",
    img: "/showcase/Dandunet.png",
    placement: "center",
    link: "https://www.figma.com/proto/x6Izcxf5TTOQvMzTEjBzHx/soltani-dandunet-Copy?node-id=8001-17302&p=f&viewport=1504%2C518%2C0.02&t=CFk2evpXEwcX4g46-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=10615%3A68120&show-proto-sidebar=1",
  },
  {
    title: "ODX (Mobile)",
    img: "/showcase/ODX.png",
    placement: "center",
    link: "https://www.figma.com/proto/WTc7pbrJEceSDFcxmAx8ag/rostami-odx-Copy?node-id=15008-2&p=f&viewport=400%2C336%2C0.29&t=T1s9vaVPFzDJLuWc-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=15382%3A19203",
  },
  {
    title: "Styleogy (3 Panel)",
    img: "/showcase/Styleogy.png",
    placement: "center",
    link: "https://www.figma.com/proto/FvQy66Zf1Vozeg4IGmA68y/mosayebzade-styling-Copy?node-id=14040-227&p=f&viewport=305%2C48%2C0.02&t=N6w9BHQmCsiT732Q-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=18091%3A3549&show-proto-sidebar=1",
  },
];

export default function Showcase() {
  const swipperRef = useRef<SwiperRef | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-gradient-to-b from-black to-[#08041F] py-[100px] min-h-screen relative z-10">
      <div className="text-center">
        <div className="bg-size text-[39px] bg-gradient-to-r from-[#735AFF] from-20% to-[#E2DFFF] bg-clip-text text-transparent font-bold">
          SHOWCASE
        </div>
        <h2 className="text-[18px] text-[#B4B4B4]">A glimpse into my work</h2>
      </div>

      <div className="relative max-w-[1300px] px-6 pt-10 mx-auto">
        <Swiper
          ref={swipperRef}
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          onSlideNextTransitionStart={(swipper) => {
            setActiveIndex(swipper.activeIndex);
          }}
          onSlideNextTransitionEnd={(swipper) => {
            setActiveIndex(swipper.activeIndex);
          }}
          breakpoints={{
            768: { slidesPerView: 1.2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {showcase.map(({ img, placement, title }, index) => (
            <SwiperSlide key={index}>
              <div className="relative overflow-hidden bg-[#1A202C] md:h-[700px] h-[600px] rounded-[50px] group">
                <Image
                  alt=""
                  src={img}
                  width={placement === "center" ? 238 : 341}
                  height={placement === "center" ? 488 : 408}
                  className={cn("absolute top-1/2 -translate-y-1/2", {
                    "left-1/2 -translate-x-1/2": placement === "center",
                    "right-0": placement === "right",
                    "left-0": placement === "left",
                  })}
                />
                <div className="absolute top-[25px] z-10 right-[20px] size-[70px] rounded-full bg-neutral-400 flex justify-center items-center">
                  <ArrowUpRight size={40} />
                </div>
                <div className="absolute bottom-10 inset-x-10 text-white z-20">
                  <h6 className="text-[15px]">Ui UX</h6>
                  <h2 className="text-[28px]">{title}</h2>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t z-10 from-[#050312] to-transparent" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute top-1/2 -translate-y-1/2 left-0 z-20 hidden md:block">
          <button
            disabled={activeIndex === 0}
            onClick={() => {
              setActiveIndex((prev) => Math.max(prev - 3, 0));
              swipperRef.current?.swiper.slidePrev();
              swipperRef.current?.swiper.slidePrev();
              swipperRef.current?.swiper.slidePrev();
            }}
            className="bg-[#4E54FE] p-[10px] rounded-full cursor-pointer disabled:grayscale disabled:opacity-45 disabled:hover:bg-[#4E54FE] disabled:cursor-not-allowed"
          >
            <ArrowLeft size={32} className="text-white" />
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-0 z-20 hidden md:block">
          <button
            disabled={activeIndex === showcase.length - 3}
            onClick={() => {
              swipperRef.current?.swiper.slideNext();
              swipperRef.current?.swiper.slideNext();
              swipperRef.current?.swiper.slideNext();
            }}
            className="bg-[#4E54FE] p-[10px] rounded-full cursor-pointer disabled:grayscale disabled:opacity-45 disabled:hover:bg-[#4E54FE] disabled:cursor-not-allowed"
          >
            <ArrowRight size={32} className="text-white" />
          </button>
        </div>
      </div>
      <div className="justify-center mt-8 gap-2 hidden md:flex">
        {Array.from({ length: showcase.length / 3 }).map((_, index) => {
          const isActive = index === Math.floor(activeIndex / 3);
          return (
            <button
              onClick={() => {
                swipperRef.current?.swiper.slideTo(index * 3);
                setActiveIndex(index * 3);
              }}
              key={index}
              className={cn(
                "size-2 rounded-full cursor-pointer transition-all duration-300 ease-out",
                {
                  "bg-white": !isActive,
                  "bg-[#4E54FE] w-[24px]": isActive,
                }
              )}
            />
          );
        })}
      </div>
      <div className="flex justify-between gap-2 w-full md:hidden items-center">
        <button
          disabled={activeIndex === 0}
          onClick={() => {
            setActiveIndex((prev) => Math.max(prev - 1, 0));
            swipperRef.current?.swiper.slidePrev();
          }}
          className="p-[10px] rounded-full disabled:opacity-45"
        >
          <ChevronLeft size={32} className="text-white" />
        </button>
        {Array.from({ length: showcase.length }).map((_, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              onClick={() => {
                swipperRef.current?.swiper.slideTo(index);
                setActiveIndex(index);
              }}
              key={index}
              className={cn(
                "size-2 rounded-full cursor-pointer transition-all duration-300 ease-out",
                {
                  "bg-white": !isActive,
                  "bg-[#4E54FE] w-[24px]": isActive,
                }
              )}
            />
          );
        })}
        <button
          disabled={activeIndex === showcase.length}
          onClick={() => {
            swipperRef.current?.swiper.slideNext();
          }}
          className="p-[10px] rounded-full disabled:opacity-45"
        >
          <ChevronRight size={32} className="text-white" />
        </button>
      </div>
    </div>
  );
}
