import { Box } from "@mui/material";
import Navbar from "../navbar/Navbar";
import { useState } from "react";
import Landing from "../navbar/Landing";
import Banner from "./parts/Banner";

export default function Home() {
  const [showNav, setShowNav] = useState(false);
  return (
    <Box>
      <Navbar showNav={showNav} />
      <Landing setShowNav={setShowNav} />
      <Banner />
    </Box>
  );
}
