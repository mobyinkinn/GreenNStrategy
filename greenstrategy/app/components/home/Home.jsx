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
import Image from "next/image";
import banner1 from "@/public/assets/1.jpg";
import SectionVideo from "./parts/SectionVideo";
import Carausal from "./parts/Carausel";
import ContactSection from "./parts/ContactSection";

export default function Home() {
  const [showNav, setShowNav] = useState(false);
  return (
    <Box
      backgroundColor={"black"}
      sx={{ overflowX: "hidden" }}
      className="background-texture"
    >
      <Navbar showNav={showNav} />
      <Landing setShowNav={setShowNav} />
      <Banner />
      <SectionVideo />
      {/* <ProgressBar /> */}
      <Services />
     
      <ContactSection/>
      {/* <Form /> */}
      <Carausal />
      {/* <AboveFooter /> */}
      <Footer />
    </Box>
  );
}
