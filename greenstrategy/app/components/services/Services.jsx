import { Box, Typography, Stack } from "@mui/material";
import Navbar from "../navbar/Navbar";
import { serviceData } from "../home/parts/serviceData";
import ServiceCard from "../home/parts/ServiceCard";

export default function Services() {
  return (
    <Stack
      padding={{
        xs: "40px 20px",
        md: "50px 50px",
      }}
      backgroundColor={"black"}
      color={"white"}
    >
      <h2
        style={{
          color: "limegreen",
          marginBottom: "20px",
          fontSize: "2rem",
          textAlign: "center",
        }}
      >
        Our Services
      </h2>
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
