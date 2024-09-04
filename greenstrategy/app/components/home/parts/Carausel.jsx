import { Box } from "@mui/system";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "@/public/assets/a-random-logo.png";
import Image from "next/image";

const carausel = [
  { id: 0, img: img },
  { id: 1, img: img },
  { id: 2, img: img },
  { id: 3, img: img },
  { id: 4, img: img },
  { id: 5, img: img },
  { id: 6, img: img },
  { id: 7, img: img },
  { id: 8, img: img },
  { id: 9, img: img },
  { id: 10, img: img },
  { id: 11, img: img },
];

var settings = {
  dots: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "ease",
};
var settingsRight = {
  dots: true,
  infinite: true,
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
    <Box>
      <Slider {...settings}>
        {carausel.map((el, i) => {
          return (
            <Box>
              <Image width={200} height={200} src={el.img} alt="" />
            </Box>
          );
        })}
      </Slider>
      <Slider {...settingsRight}>
        {carausel.map((el, i) => {
          return (
            <Box>
              <Image width={200} height={200} src={el.img} alt="" />
            </Box>
          );
        })}
      </Slider>
    </Box>
  );
}
