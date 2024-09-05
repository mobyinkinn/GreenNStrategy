import { Box, Typography, Stack } from "@mui/material";
import Navbar from "../navbar/Navbar";
import { serviceData } from "../home/parts/serviceData";
import ServiceCard from "../home/parts/ServiceCard";

export default function Services() {
  return (
    <Stack
      padding={{
        xs: "20px 20px",
        md: "50px 50px",
      }}
      backgroundColor={"black"}
      color={"white"}
      gap={"30px"}
    >
      {/* <h2
        style={{
          color: "limegreen",
          marginBottom: "20px",
          fontSize: "2rem",
          textAlign: "center",
        }}
      >
        Our Services
      </h2> */}
      <Stack direction={"row"}>
        <Typography
          className="text-stroke"
          fontSize={"70px"}
          color="transparent"
          fontWeight={"bold"}
          lineHeight={1}
        >
          We Are&nbsp;
        </Typography>
        <span style={{ color: "#0c9265",fontWeight:"bold", fontSize: "70px" }}>Offering:-</span>
      </Stack>
      <Stack
        direction={{
          xs: "column",
          md: "row",
        }}
        sx={{ justifyContent: "space-between", flexWrap: "wrap" }}
      >
        {serviceData.map((el) => (
          <ServiceCard name={el.name} data={el.data} key={el.id} />
        ))}
      </Stack>
    </Stack>
  );
}
