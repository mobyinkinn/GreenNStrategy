// "use client";

// import { useGSAP } from "@gsap/react";
// import { Box, Stack } from "@mui/material";
// import gsap from "gsap";
// import { useState } from "react";
// import { Carousel } from "react-responsive-carousel";
// import img1 from "@/public/assets/tempBanner.jpg";
// import img2 from "@/public/assets/image.png";
// import Image from "next/image";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; 
// export default function Banner() {
//   const responsive = {
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 1,
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 1,
//     },
//     mobile: {
//       breakpoint: { max: 765, min: 0 },
//       items: 1,
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//     },
//   };

//   const Images=[
//     {
//       id:1,
//       src:img1
//     },
//     {
//       id:2,
//       src:img2
//     }
//   ]
//   return (
//     <Carousel
//       responsive={responsive}
//       autoPlay
//       infinite
//       swipeable
//       autoPlaySpeed={1500}
//       removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
//     >
//       {Images.map((d) => (
//         <Image src={d.src} />
//       ))}
//     </Carousel>
//     // </Box>
//   );
// }

// // import React, { useRef } from "react";
// // import Slider from "react-slick";

// // function AutoPlayMethods() {
// //   let sliderRef = useRef(null);
// //   const play = () => {
// //     sliderRef.slickPlay();
// //   };
// //   const pause = () => {
// //     sliderRef.slickPause();
// //   };

// //   return (
// //
// //   );
// // }

import Slider from "react-slick";
import img1 from "@/public/assets/tempBanner.jpg";
import img2 from "@/public/assets/image.png";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Stack } from "@mui/material";

export default function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
      <Slider {...settings}>
        {Images.map((d) => (
          <div key={d.id}>
            <Image
              src={d.src}
              alt={`Image ${d.id}`}
            />
          </div>
        ))}
      </Slider>
  );
}
