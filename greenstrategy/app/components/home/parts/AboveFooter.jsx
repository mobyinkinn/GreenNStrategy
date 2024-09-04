import { Stack, Typography } from "@mui/material";

export default function AboveFooter() {
  return (
    <Stack
      alignItems={"center"}
      padding={"150px 0"}
      sx={{ background: "linear-gradient(green, black)" }}
    >
      <Typography color={"#ddd"} fontSize={"3rem"}>
        Book a Demo Now
      </Typography>
      <button className="btn-green">Contact Us</button>
    </Stack>
  );
}
