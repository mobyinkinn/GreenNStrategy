"use client";

import Slider from "react-slick";
import img1 from "@/public/assets/tempBanner.jpg";
import img2 from "@/public/assets/image.png";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Stack } from "@mui/material";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Banner() {
  const bannerRef = useRef();
  useGSAP(() => {
    const innerWidth = window.innerWidth;

    gsap.registerPlugin(ScrollTrigger);

    //Defining a timeline to manage our animations
    let tl = gsap.timeline();

    //Defining the animations to run in tl timeline
    tl.from(bannerRef.current, {
      x: innerWidth,
      duration: 1,
      ease: "Power1.inOut",
      scrollTrigger: {
        trigger: bannerRef.current,
        start: "top 80%",
        end: "bottom bottom",
        scrub: true,
        markers: false,
      },
    });
  });
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    draggable: true, // Enables dragging on desktop
    arrows: false,
    pauseOnHover: false,
  };

  const Images = [
    {
      id: 1,
      src: img1,
    },
    {
      id: 2,
      src: img2,
    },
  ];

  return (
    <Box width={"100vw"} margin={"0 auto"} ref={bannerRef}>
      <Slider {...settings}>
        {Images.map((d) => (
          <Stack
            key={d.id}
            width={"100vw"}
            height={"60vh"}
            position={"relative"}
          >
            <Image
              src={d.src}
              alt={`Image ${d.id}`}
              fill
              objectFit={"cover"}
              sizes="100vw"
            />
          </Stack>
        ))}
      </Slider>
    </Box>
  );
}
