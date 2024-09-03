"use client";

import { Box } from "@mui/material";
import Navbar from "../navbar/Navbar";
import { useState } from "react";
import Landing from "../navbar/Landing";
import Banner from "./parts/Banner";
import Services from "../services/Services";
import ProgressBar from "./parts/ProgressBar";
import Footer from "../footer/Footer";
import Form from "./parts/Form";

export default function Home() {
  const [showNav, setShowNav] = useState(false);
  return (
    <Box backgroundColor={"black"} sx={{ overflowX: "hidden" }}>
      <Navbar showNav={showNav} />
      <Landing setShowNav={setShowNav} />
      <Banner />
      {/* <ProgressBar /> */}
      <Services />
      <Form />
      <Footer />
    </Box>
  );
}
