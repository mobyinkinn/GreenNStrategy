import { Box } from "@mui/system";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "@/public/assets/a-random-logo.png";
import img3 from "@/public/assets/a-random-logo3.png";
import img4 from "@/public/assets/a-random-logo4.png";
import Image from "next/image";
import { Stack, Typography } from "@mui/material";

const carausel = [
  { id: 0, img: img },
  { id: 1, img: img3 },
  { id: 2, img: img4 },
  { id: 3, img: img },
  { id: 4, img: img3 },
  { id: 5, img: img4 },
  { id: 6, img: img },
  { id: 7, img: img3 },
  { id: 8, img: img4 },
  { id: 9, img: img },
  { id: 10, img: img3 },
  { id: 11, img: img4 },
];

var settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "ease",
};
var settingsRight = {
  dots: false,
  infinite: true,
  arrows: false,
  speed: 2000,
  rtl: true,
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "ease",
};

export default function Carausal() {
  return (
    <Box padding={"32px 106px 60px 106px"}>
      <Typography color={"white"} fontSize={"2.5rem"} margin={"45px 0"}>
        Trusted by <span style={{ color: "#0c9265" }}>the best</span>
      </Typography>
      <Stack gap={"40px"}>
        <Slider {...settings}>
          {carausel.map((el, i) => {
            return (
              <Box>
                <Image
                  width={100}
                  height={100}
                  src={el.img}
                  alt=""
                  style={{ filter: "grayscale(100%)" }}
                />
              </Box>
            );
          })}
        </Slider>
        <Slider {...settingsRight}>
          {carausel.map((el, i) => {
            return (
              <Box>
                <Image
                  width={100}
                  height={100}
                  src={el.img}
                  style={{ filter: "grayscale(100%)" }}
                  alt=""
                />
              </Box>
            );
          })}
        </Slider>
      </Stack>
    </Box>
  );
}
