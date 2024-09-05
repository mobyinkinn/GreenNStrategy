"use client";

import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import logo from "@/public/assets/Green-&-Strategy.jpg";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
export default function Landing({ setShowNav }) {
  const animeRef = useRef();

  useGSAP(() => {
    gsap.to(".bar", 1.5, {
      delay: 0,
      height: 0,
      stagger: {
        amount: 0.5,
      },
      ease: "power4.inOut",
    });

    //calculation the width of the screen for the horizontal animation
    const innerWidth = window.innerWidth;
    // console.log(innerWidth);
    gsap.from(".letter", 0.4, {
      y: innerWidth / 2,
      opacity: 0,
      delay: 0,
      ease: "power4.inOut",
      stagger: {
        amount: 0.5,
      },
      duration: 0.5,
    });
    // Resgistering the ScrollTrigger so that we can use it
    gsap.registerPlugin(ScrollTrigger);

    //Defining a timeline to manage our animations
    let tl = gsap.timeline();

    //Defining the animations to run in tl timeline
    tl.to(animeRef.current, {
      x: innerWidth / 7.3 - innerWidth / 2,
      scale: 0.25,

      scrollTrigger: {
        trigger: animeRef.current,
        start: "center center",
        end: "bottom 25%",
        scrub: true,
        // markers: true,
      },
      onComplete: () => {
        // show navbar when animation is complete
        setShowNav(true);
      },
      onUpdate: () => {
        // hide navbar when animation is in progress
        // for scrolling up
        setShowNav(false);
      },
    });

    // ScrollTrigger.getAll().forEach((trigger) => {
    //   console.log("ScrollTrigger instance: ", trigger);
    // });
  });
  return (
    <Box>
      <Stack direction={"row"} position={"absolute"} width={"100%"}>
        <Box
          backgroundColor={"#333"}
          height={"100vh"}
          width={"20%"}
          className="bar"
        ></Box>
        <Box
          backgroundColor={"#333"}
          height={"100vh"}
          width={"20%"}
          className="bar"
        ></Box>
        <Box
          backgroundColor={"#333"}
          height={"100vh"}
          width={"20%"}
          className="bar"
        ></Box>
        <Box
          backgroundColor={"#333"}
          height={"100vh"}
          width={"20%"}
          className="bar"
        ></Box>
        <Box
          backgroundColor={"#333"}
          height={"100vh"}
          width={"20%"}
          className="bar"
        ></Box>
      </Stack>
      <Stack maxWidth={"100%"}>
        {/* <Stack backgroundColor={"black"} height={"100vh"}></Stack> */}
        <Stack
          backgroundColor={"black"}
          height={"70vh"}
          width={"100vw"}
          sx={{
            color: "white",
            justifyContent: "end",
            alignItems: "center",
            // gap: "5px",
          }}
        >
          <Stack width={"100%"}>
            {/* <Image src={logo} alt="" ref={animeRef} fill objectFit="cover" /> */}
            <Stack ref={animeRef} direction={"row"} justifyContent={"center"}>
              <Typography
                sx={{
                  fontSize: {
                    xs: "1.6rem",
                    md: "2rem",
                    lg: "10rem",
                  },
                  color: "#21d121",
                  fontWeight: "bold",
                  fontFamily: "popins",
                }}
              >
                <span className="letter">G</span>
                <span className="letter">r</span>
                <span className="letter">e</span>
                <span className="letter">e</span>
                <span className="letter">n</span>
                &nbsp;
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "1.6rem",
                    md: "2rem",
                    lg: "10rem",
                  },

                  fontWeight: "bold",
                  fontFamily: "popins",
                }}
              >
                <span className="letter">&</span>
                <span className="letter">&nbsp;</span>
                <span className="letter">S</span>
                <span className="letter">t</span>
                <span className="letter">r</span>
                <span className="letter">a</span>
                <span className="letter">t</span>
                <span className="letter">e</span>
                <span className="letter">g</span>
                <span className="letter">y</span>
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          justifyContent={"end"}
          alignItems={"center"}
          height={"30vh"}
          onClick={() =>
            window.scrollTo({
              top: 610,
              behavior: "smooth", // This enables the smooth scrolling effect
            })
          }
        >
          <Stack
            alignItems={"end"}
            height={"100px"}
            width={"70px"}
            borderRadius={6}
            border={"1px solid #053726"}
          >
            <KeyboardDoubleArrowDownIcon
              sx={{
                color: "white",
                fontSize: "75px",
                paddingTop: "23px",
                paddingLeft: "10px",
              }}
            />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
