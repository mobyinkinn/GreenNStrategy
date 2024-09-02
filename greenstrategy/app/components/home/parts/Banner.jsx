"use client";

import { useGSAP } from "@gsap/react";
import { Box, Stack } from "@mui/material";
import gsap from "gsap";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import img from "@/public/assets/tempBanner.jpg";
import Image from "next/image";

export default function Banner() {
  return (
    // <Box sx={{ width: "100%" }}>
    <Carousel showArrows={true} axis={"horizontal"}>
      <Box position={"relative"}>
        <Image src={img} fill objectFit="contain" alt="" />
      </Box>
      <div position={"relative"}>
        <Image src={img} fill objectFit="contain" alt="" />
      </div>
      <div position={"relative"}>
        <Image src={img} fill objectFit="contain" alt="" />
      </div>
      <div position={"relative"}>
        <Image src={img} fill objectFit="contain" alt="" />
      </div>
      <div position={"relative"}>
        <Image src={img} fill objectFit="contain" alt="" />
      </div>
      <div position={"relative"}>
        <Image src={img} fill objectFit="contain" alt="" />
      </div>
    </Carousel>
    // </Box>
  );
}

// import React, { useRef } from "react";
// import Slider from "react-slick";

// function AutoPlayMethods() {
//   let sliderRef = useRef(null);
//   const play = () => {
//     sliderRef.slickPlay();
//   };
//   const pause = () => {
//     sliderRef.slickPause();
//   };

//   return (
//
//   );
// }
