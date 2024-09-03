import { Box, Stack } from "@mui/material";

export default function ProgressBar() {
  return (
    <Stack
      height={"100px"}
      width={"100%"}
      direction={"row"}
      gap={"10px"}
      backgroundColor={"black"}
      sx={{ justifyContent: "center", alignItems: "center" }}
    >
      <Stack
        direction={"row"}
        sx={{ justifyContent: "start" }}
        backgroundColor={"#333"}
        width={"60px"}
        height={"3px"}
      >
        <Stack className="banner-animation"></Stack>
      </Stack>
      <Stack
        direction={"row"}
        sx={{ justifyContent: "start" }}
        backgroundColor={"#333"}
        width={"60px"}
        height={"3px"}
      >
        <Stack className="banner-animation-delay"></Stack>
      </Stack>
    </Stack>
  );
}
