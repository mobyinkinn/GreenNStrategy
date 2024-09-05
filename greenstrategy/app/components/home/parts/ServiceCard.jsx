"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import BarChartIcon from "@mui/icons-material/BarChart";
import Slide from "@mui/material/Slide";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
export default function ServiceCard({ name, data }) {
  const [showButton, setShowButton] = useState(false);

  return (
    <Stack
      padding={"10px"}
      className="div-animated"
      onMouseEnter={() => setShowButton(true)}
      onMouseLeave={() => setShowButton(false)}
      sx={{
        "&:hover": {
          translate: "0 -20px",
          transition: "all 0.5s ease",
        },
      }}
    >
      {/* <Box
        sx={{
          width: "40%",
          height: "3px",
          backgroundColor: "limegreen",
          margin: "auto",
        }}
      ></Box> */}
      <Stack
        width={{
          xs: "80vw",
          md: "40vw",
          lg: "20vw",
        }}
        sx={{
          justifyContent: "space-between",
          height: "100%",
          border: "1px solid white",
          borderRadius: "5px",
          padding: "30px",
          cursor: "pointer",
        }}
      >
        <Stack alignItems={"center"}>
          <BarChartIcon sx={{ height: "60px", width: "60px" }} />
          <h2 style={{ textAlign: "center" }}>{name}</h2>

          <Typography marginTop={"4px"} sx={{ textAlign: "center" }}>
            {data}
          </Typography>
        </Stack>
        <Stack
          width={"100%"}
          height={"20px"}
          alignItems={"center"}
          position={"relative"}
        >
          <Slide direction="up" in={showButton} mountOnEnter unmountOnExit>
            <Button
            endIcon={<ArrowRightIcon sx={{pl:"0px",fontSize:"10px"}}/>}
              color={"limegreen"}
              sx={{ textTransform: "none", color: "#0c9265" }}
            >
              Learn more
            </Button>
          </Slide>
        </Stack>
      </Stack>
    </Stack>
  );
}
