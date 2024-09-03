"use client";

import { Box } from "@mui/material";
import Navbar from "../navbar/Navbar";
import { useState } from "react";
import Landing from "../navbar/Landing";
import Banner from "./parts/Banner";
import Services from "../services/Services";
import ProgressBar from "./parts/ProgressBar";

export default function Home() {
  const [showNav, setShowNav] = useState(false);
  return (
    <Box>
      <Navbar showNav={showNav} />
      <Landing setShowNav={setShowNav} />
      <Banner />
      <ProgressBar />
      <Services />
    </Box>
  );
}
