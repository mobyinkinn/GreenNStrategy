"use client";

import Slider from "react-slick";
import img1 from "@/public/assets/tempBanner.jpg";
import img2 from "@/public/assets/image.png";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";

export default function Banner() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    draggable: true, // Enables dragging on desktop
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
    <Box width={"90vw"} margin={"0 auto"}>
      <Slider {...settings}>
        {Images.map((d) => (
          <div key={d.id}>
            <Image src={d.src} alt={`Image ${d.id}`} width={900} height={700} />
          </div>
        ))}
      </Slider>
    </Box>
  );
}
