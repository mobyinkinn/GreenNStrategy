import { Box, Stack } from "@mui/material";

export default function ProgressBar() {
  return (
    <Stack direction={"row"} justifyContent={"center"}>
      <Stack
        height={"100px"}
        width={"100%"}
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
      </Stack>
      <Stack
        height={"100px"}
        width={"100%"}
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
      </Stack>
    </Stack>
  );
}
