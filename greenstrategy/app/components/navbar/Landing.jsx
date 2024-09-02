"use client";

import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Landing({ setShowNav }) {
  const animeRef = useRef();

  useGSAP(() => {
    //calculation the width of the screen for the horizontal animation
    const innerWidth = window.innerWidth;
    // console.log(innerWidth);

    // Resgistering the ScrollTrigger so that we can use it
    gsap.registerPlugin(ScrollTrigger);

    //Defining a timeline to manage our animations
    let tl = gsap.timeline();

    //Defining the animations to run in tl timeline
    tl.to(animeRef.current, {
      x: innerWidth / 10 - innerWidth / 2,
      scale: 0.5,

      scrollTrigger: {
        trigger: animeRef.current,
        start: "top 40%",
        end: "bottom 10%",
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
    <Stack>
      {/* <Stack backgroundColor={"black"} height={"100vh"}></Stack> */}
      <Stack
        backgroundColor={"black"}
        height={"100vh"}
        width={"100vw"}
        maxWidth={"100%"}
        sx={{
          color: "white",
          justifyContent: "center",
          alignItems: "center",
          // gap: "5px",
        }}
      >
        <Stack direction={"row"} sx={{ gap: "10px" }} ref={animeRef}>
          <Typography
            sx={{
              fontSize: {
                xs: "1.6rem",
                md: "2rem",
                lg: "3rem",
              },
              color: "limegreen",
            }}
          >
            Green
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "1.6rem",
                md: "2rem",
                lg: "3rem",
              },
            }}
          >
            N Strategy
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
