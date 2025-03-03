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
// import banner1 from "@/public/assets/2.jpg";
// import banner2 from "@/public/assets/3.jpg";
// import banner3 from "@/public/assets/4.jpg";

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
//         end: "center bottom",
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
//       src: banner1,
//     },
//     {
//       id: 2,
//       src: banner2,
//     },
//     {
//       id: 3,
//       src: banner3,
//     },
//     // Add more images here if needed
//   ];

//   return (
//     <Box
//       width={"100vw"}
//       margin={"0 auto"}
//       // ref={bannerRef}
//       backgroundColor={"black"}
//     >
//       <Slider {...settings}>
//         {Images.map((d) => (
//           <Stack
//             key={d.id}
//             width={"100vw"}
//             height={"100vh"}
//             position={"relative"}
//             border={"none"}
//           >
//             <Image
//               src={d.src}
//               alt={`Image ${d.id}`}
//               fill
//               objectFit={"contain"}
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
//     // Reset animation for all progress bars
//     progressBars.current.forEach((bar, index) => {
//       bar.style.width = "0%"; // Reset all bars
//       bar.style.transition = "none"; // Disable transition to reset instantly
//       if (index === currentSlide) {
//         // Start animation for the active slide
//         setTimeout(() => {
//           // Use a timeout to allow the reset to take effect
//           bar.style.transition = "width 5s linear";
//           bar.style.width = "100%";
//         }, 50);
//       }
//     });
//   }, [currentSlide]);

//   return (
//     <Stack
//       height={"100px"}
//       width={"100%"}
//       direction={"row"}
//       gap={"20px"}
//       backgroundColor={"black"}
//       sx={{ justifyContent: "center", alignItems: "center" }}
//     >
//       {[...Array(totalSlides)].map((_, index) => (
//         <Stack
//           key={index}
//           direction={"row"}
//           sx={{ justifyContent: "start" }}
//           backgroundColor={"#333"}
//           width={`${180 / totalSlides}px`} // Dynamically set width based on total slides
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

import img1 from "@/public/assets/tempBanner.jpg";
import img2 from "@/public/assets/image.png";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Stack, Typography } from "@mui/material";
import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import banner1 from "@/public/assets/2.jpg";
import banner2 from "@/public/assets/3.jpg";
import banner3 from "@/public/assets/4.jpg";
import baby from "@/public/assets/baby.png";
import skin from "@/public/assets/skin-care.jpg";
import hair from "@/public/assets/Hair.webp";
import banner from "@/public/assets/3.png";

export default function Banner() {
  const bannerRef = useRef();
  const sliderRef = useRef(); // Reference to the slider
  const [currentSlide, setCurrentSlide] = useState(0);

  useGSAP(() => {
    const innerWidth = window.innerWidth;

    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline();

    tl.from(bannerRef.current, {
      x: innerWidth,
      duration: 1,
      ease: "Power1.inOut",
      scrollTrigger: {
        trigger: bannerRef.current,
        start: "top 80%",
        end: "center bottom",
        scrub: true,
        markers: false,
      },
    });
  });

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    fade: true,
    speed: 2000,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    draggable: true,
    arrows: false,
    pauseOnHover: false,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const Images = [
    {
      id: 1,
      head: "Your best provider for data analysis and strategy in UAE",
      content:
        "We deliver the bullet proof strategy for your business success, driven by invalueable data and in depth research tailored specifically for your brand.",
      src: banner,
    },
    {
      id: 2,
      head: "Market Research",
      content:
        "Campaign Creation, Lead Generation, Market Trends, AI Integration ,Competitor Analysis, Customer Experience, Customer Satisfaction, Product Testing, ROI Optimization ",
      src: banner,
    },
    {
      id: 3,
      head: "Our Vision",
      content:
        "Our vision is to become the UAE's most trusted advisor, delivering top-tier Data Analysis and Strategic Insights through cutting-edge market research tools.",
      src: banner,
    },
  ];

  // Function to handle slide change when a progress bar is clicked
  const handleProgressBarClick = (index) => {
    setCurrentSlide(index);
    sliderRef.current.slickGoTo(index); // Change the slide using sliderRef
  };

  return (
    <Box width={"100vw"} margin={"70px 70px"} backgroundColor={"black"}>
      <Slider {...settings} ref={sliderRef}>
        {Images.map((d) => (
          <Box
            display={"flex"}
            key={d.id}
            flexDirection={"row"}
            height={"70vh"}
            border={"none"}
          >
            <Box
              display={"inline-block"}
              position={"relative"}
              height={"70vh"}
              width={"50%"}
            >
              <Image
                src={d.src}
                alt={`Image ${d.id}`}
                fill
                objectFit={"cover"}
                sizes="50vw"
              />
            </Box>
            <Box
              width={"50%"}
              height={"100%"}
              display={"inline-block"}
              color={"#ddd"}
              padding={"50px"}
              position={"relative"}
              bottom={"40%"}
            >
              <Typography fontSize={"2.5rem"}>{d.head}</Typography>
              <Typography fontSize={"1.2rem"}>{d.content}</Typography>
            </Box>
          </Box>
        ))}
      </Slider>
      <ProgressBar
        currentSlide={currentSlide}
        totalSlides={Images.length}
        onProgressBarClick={handleProgressBarClick} // Pass the click handler
      />
    </Box>
  );
}

function ProgressBar({ currentSlide, totalSlides, onProgressBarClick }) {
  const progressBars = useRef([]);

  useEffect(() => {
    progressBars.current.forEach((bar, index) => {
      bar.style.width = "0%";
      bar.style.transition = "none";
      if (index === currentSlide) {
        setTimeout(() => {
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
      gap={"20px"}
      backgroundColor={"black"}
      sx={{ justifyContent: "center", alignItems: "center" }}
    >
      {[...Array(totalSlides)].map((_, index) => (
        <Stack
          key={index}
          direction={"row"}
          sx={{ justifyContent: "start", cursor: "pointer" }} // Add cursor pointer
          backgroundColor={"#333"}
          borderRadius={2}
          width={`${180 / totalSlides}px`}
          height={"4px"}
          onClick={() => onProgressBarClick(index)} // Handle click event
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
