import { Box, Stack, TextField, Typography } from "@mui/material";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logo from "@/public/assets/logo.png";
import Image from "next/image";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
export default function Footer() {
  return (
    // <Stack
    //   width={"100%"}
    //   direction={"row"}
    //   sx={{ justifyContent: "space-between", borderTop: "1px solid #dddddd" }}
    //   backgroundColor={"black"}
    //   color={"#ddd"}
    //   padding={"100px 70px"}
    // >
    //   <Stack fontSize={"1.6rem"} gap={"15px"}>
    //     <Image src={logo} alt="" width={250} height={50} />

    //     <Stack direction={"row"} gap={"10px"}>
    //       <InstagramIcon className="icon" />
    //       <FacebookIcon className="icon" />
    //       <XIcon className="icon" />
    //       <LinkedInIcon className="icon" />
    //     </Stack>
    //     <Typography>All Rights Reserved.</Typography>
    //   </Stack>
    //   <Box
    //     sx={{ width: "1px", height: "150px", backgroundColor: "white" }}
    //   ></Box>
    //   <Stack gap={"5px"} className="expanding-link" fontSize={"0.9rem"}>
    //     <Typography
    //       fontWeight={"bold"}
    //       sx={{ marginBottom: "5px", fontSize: "1.2rem" }}
    //     >
    //       Services:{" "}
    //     </Typography>
    //     <Link href={"/"} style={{ textDecoration: "none", color: "#ddd" }}>
    //       Market Research
    //     </Link>
    //     <Link href={"/"} style={{ textDecoration: "none", color: "#ddd" }}>
    //       Data Analysis
    //     </Link>
    //     <Link href={"/"} style={{ textDecoration: "none", color: "#ddd" }}>
    //       Digital Marketing
    //     </Link>
    //     <Link href={"/"} style={{ textDecoration: "none", color: "#ddd" }}>
    //       Web Development
    //     </Link>
    //   </Stack>
    //   <Stack gap={"5px"} className="expanding-link" fontSize={"0.9rem"}>
    //     <Typography
    //       sx={{ marginBottom: "5px", fontSize: "1.2rem" }}
    //       fontWeight={"bold"}
    //     >
    //       Quick links:
    //     </Typography>
    //     <Link href={"/"} style={{ textDecoration: "none", color: "#ddd" }}>
    //       Home
    //     </Link>
    //     <Link href={"/About"} style={{ textDecoration: "none", color: "#ddd" }}>
    //       About
    //     </Link>
    //     <Link
    //       href={"/Contacts"}
    //       style={{ textDecoration: "none", color: "#ddd" }}
    //     >
    //       Contacts
    //     </Link>
    //   </Stack>
    //   <Box
    //     sx={{ width: "1px", height: "150px", backgroundColor: "white" }}
    //   ></Box>
    //   <Stack gap={"15px"}>
    //     <Typography color={"#ddd"} fontSize={"1.2rem"} fontWeight={"bold"}>
    //       Subscribe to our newsletter:{" "}
    //     </Typography>
    //     <Stack direction={"row"} gap={"10px"}>
    //       <input
    //         required
    //         style={{
    //           backgroundColor: "black",
    //           color: "#ddd",
    //           padding: "5px 0 5px 15px",
    //           height: "50px",
    //           outline: "none",
    //           borderRadius: "10px",
    //           border: "1px solid #ddd",
    //         }}
    //         placeholder="johnDoe@gmail.com"
    //       />
    //       <button className="btn-black">Subscibe</button>
    //     </Stack>
    //   </Stack>
    // </Stack>
    <Stack
      direction={"row"}
      justifyContent={"space-around"}
      p={"40px 80px 80px 80px"}
    >
      <Stack width={"60%"}>
        <Typography color="#0c9265" fontSize={"25px"}>
          let's talk
        </Typography>
        <Stack gap={"37px"}>
          <Stack direction={"row"} gap={"10px"}>
            <Typography
              className="text-stroke"
              fontSize={"90px"}
              color="transparent"
              fontWeight={"bold"}
              lineHeight={1}
            >
              about your{" "}
              <span style={{ color: "white", fontSize: "90px" }}>
                {" "}
                next project.
              </span>
            </Typography>
          </Stack>
          <button className="btn-animated">Get in touch</button>
        </Stack>
      </Stack>
      <Stack width={"30%"} gap={"15px"} justifyContent={"center"}>
        <Typography color="white" fontSize={"35px"} fontWeight={"bold"}>
          contact <span style={{ color: "#0c9265", fontSize: "35px" }}>us</span>
        </Typography>
        <Stack gap={"10px"}>
          <Stack direction={"row"} gap={"15px"}>
            <LocalPhoneIcon sx={{ color: "#0c9265" }} />{" "}
            <span style={{ color: "white" }}>+919823273822</span>
          </Stack>
          <Stack direction={"row"} gap={"15px"}>
            <EmailIcon sx={{ color: "#0c9265" }} />{" "}
            <span style={{ color: "white" }}>+info@green.com</span>
          </Stack>
          <Stack direction={"row"} gap={"15px"}>
            <LocalPhoneIcon sx={{ color: "#0c9265" }} />{" "}
            <span style={{ color: "white" }}>+919823273822</span>
          </Stack>
          <Stack direction={"row"} gap={"15px"}>
            <HomeIcon sx={{ color: "#0c9265" }} />{" "}
            <span style={{ color: "white" }}>
              613 The Metropolis Tower Business Bay, Dubai, UAE
            </span>
          </Stack>
        </Stack>
        <Stack direction={"row"} gap={"10px"}>
          <FacebookIcon sx={{ color: "#0c9265" }} />
          <InstagramIcon sx={{ color: "#0c9265" }} />
        </Stack>
      </Stack>
    </Stack>
  );
}
