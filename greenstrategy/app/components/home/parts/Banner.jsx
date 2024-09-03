// "use client";

// import Slider from "react-slick";
// import img1 from "@/public/assets/tempBanner.jpg";
// import img2 from "@/public/assets/image.png";
// import Image from "next/image";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { Box, Stack } from "@mui/material";
// import { useRef } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// export default function Banner() {
//   const bannerRef = useRef();
//   useGSAP(() => {
//     const innerWidth = window.innerWidth;

//     gsap.registerPlugin(ScrollTrigger);

//     //Defining a timeline to manage our animations
//     let tl = gsap.timeline();

//     //Defining the animations to run in tl timeline
//     tl.from(bannerRef.current, {
//       x: innerWidth,
//       duration: 1,
//       ease: "Power1.inOut",
//       scrollTrigger: {
//         trigger: bannerRef.current,
//         start: "top 80%",
//         end: "bottom bottom",
//         scrub: true,
//         markers: false,
//       },
//     });
//   });
//   const settings = {
//     dots: false,
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     draggable: true, // Enables dragging on desktop
//     arrows: false,
//     pauseOnHover: false,
//   };

//   const Images = [
//     {
//       id: 1,
//       src: img1,
//     },
//     {
//       id: 2,
//       src: img2,
//     },
//   ];

//   return (
//     <Box width={"100vw"} margin={"0 auto"} ref={bannerRef}>
//       <Slider {...settings}>
//         {Images.map((d) => (
//           <Stack
//             key={d.id}
//             width={"100vw"}
//             height={"60vh"}
//             position={"relative"}
//           >
//             <Image
//               src={d.src}
//               alt={`Image ${d.id}`}
//               fill
//               objectFit={"cover"}
//               sizes="100vw"
//             />
//           </Stack>
//         ))}
//       </Slider>
//     </Box>
//   );
// }


// "use client";

// import Slider from "react-slick";
// import img1 from "@/public/assets/tempBanner.jpg";
// import img2 from "@/public/assets/image.png";
// import Image from "next/image";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { Box, Stack } from "@mui/material";
// import { useRef, useState, useEffect } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// export default function Banner() {
//   const bannerRef = useRef();
//   const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide

//   useGSAP(() => {
//     const innerWidth = window.innerWidth;

//     gsap.registerPlugin(ScrollTrigger);

//     // Defining a timeline to manage our animations
//     let tl = gsap.timeline();

//     // Defining the animations to run in tl timeline
//     tl.from(bannerRef.current, {
//       x: innerWidth,
//       duration: 1,
//       ease: "Power1.inOut",
//       scrollTrigger: {
//         trigger: bannerRef.current,
//         start: "top 80%",
//         end: "bottom bottom",
//         scrub: true,
//         markers: false,
//       },
//     });
//   });

//   const settings = {
//     dots: false,
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     draggable: true, // Enables dragging on desktop
//     arrows: false,
//     pauseOnHover: false,
//     beforeChange: (current, next) => setCurrentSlide(next), // Update current slide index
//   };

//   const Images = [
//     {
//       id: 1,
//       src: img1,
//     },
//     {
//       id: 2,
//       src: img2,
//     },
//     // Add more images here if needed
//   ];

//   return (
//     <Box width={"100vw"} margin={"0 auto"} ref={bannerRef}>
//       <Slider {...settings}>
//         {Images.map((d) => (
//           <Stack
//             key={d.id}
//             width={"100vw"}
//             height={"60vh"}
//             position={"relative"}
//           >
//             <Image
//               src={d.src}
//               alt={`Image ${d.id}`}
//               fill
//               objectFit={"cover"}
//               sizes="100vw"
//             />
//           </Stack>
//         ))}
//       </Slider>
//       <ProgressBar currentSlide={currentSlide} totalSlides={Images.length} />
//     </Box>
//   );
// }

// function ProgressBar({ currentSlide, totalSlides }) {
//   const progressBars = useRef([]);

//   useEffect(() => {
//     // Reset animation for the current slide's progress bar
//     progressBars.current.forEach((bar, index) => {
//       bar.style.width = index === currentSlide ? "0%" : "100%"; // Reset the current slide's bar
//       if (index === currentSlide) {
//         // Trigger animation for the active slide
//         bar.style.animation = "none"; // Reset animation
//         bar.offsetHeight; // Trigger reflow to restart the animation
//         bar.style.animation = ""; // Start the animation
//       } else {
//         bar.style.animation = "none"; // Stop animation for inactive slides
//       }
//     });
//   }, [currentSlide]);

//   return (
//     <Stack
//       height={"100px"}
//       width={"100%"}
//       direction={"row"}
//       gap={"10px"}
//       backgroundColor={"black"}
//       sx={{ justifyContent: "center", alignItems: "center" }}
//     >
//       {[...Array(totalSlides)].map((_, index) => (
//         <Stack
//           key={index}
//           direction={"row"}
//           sx={{ justifyContent: "start" }}
//           backgroundColor={"#333"}
//           width={`${60 / totalSlides}px`} // Dynamically set width based on total slides
//           height={"3px"}
//         >
//           <Stack
//             ref={(el) => (progressBars.current[index] = el)}
//             className="progress-bar"
//           ></Stack>
//         </Stack>
//       ))}
//     </Stack>
//   );
// }




"use client";

import Slider from "react-slick";
import img1 from "@/public/assets/tempBanner.jpg";
import img2 from "@/public/assets/image.png";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Stack } from "@mui/material";
import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Banner() {
  const bannerRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide

  useGSAP(() => {
    const innerWidth = window.innerWidth;

    gsap.registerPlugin(ScrollTrigger);

    // Defining a timeline to manage our animations
    let tl = gsap.timeline();

    // Defining the animations to run in tl timeline
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
    beforeChange: (current, next) => setCurrentSlide(next), // Update current slide index
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
    // Add more images here if needed
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
      <ProgressBar currentSlide={currentSlide} totalSlides={Images.length} />
    </Box>
  );
}

function ProgressBar({ currentSlide, totalSlides }) {
  const progressBars = useRef([]);

  useEffect(() => {
    // Reset animation for all progress bars
    progressBars.current.forEach((bar, index) => {
      bar.style.width = "0%"; // Reset all bars
      bar.style.transition = "none"; // Disable transition to reset instantly
      if (index === currentSlide) {
        // Start animation for the active slide
        setTimeout(() => {
          // Use a timeout to allow the reset to take effect
          bar.style.transition = "width 5s linear";
          bar.style.width = "100%";
        }, 50);
      }
    });
  }, [currentSlide]);

  return (
    <Stack
      height={"100px"}
      width={"100%"}
      direction={"row"}
      gap={"10px"}
      backgroundColor={"black"}
      sx={{ justifyContent: "center", alignItems: "center" }}
    >
      {[...Array(totalSlides)].map((_, index) => (
        <Stack
          key={index}
          direction={"row"}
          sx={{ justifyContent: "start" }}
          backgroundColor={"#333"}
          width={`${60 / totalSlides}px`} // Dynamically set width based on total slides
          height={"3px"}
        >
          <Stack
            ref={(el) => (progressBars.current[index] = el)}
            className="progress-bar"
          ></Stack>
        </Stack>
      ))}
    </Stack>
  );
}