import { Box, Stack, Typography } from '@mui/material';
import React from 'react'
const SectionVideo = () => {
  return (
    <Stack direction={"row"} pb={5} justifyContent={"space-around"}>
      <Stack width={"60%"}>
        {/* <ReactPlayer
        url="@/public/assets/video.mp4"
        width="100%"
        height="auto"
        controls
      /> */}
        <video
          width="100%"
          height="auto"
          autoPlay
          loop
          muted
          controls={false}
          style={{ borderRadius: "20px" }}
        >
          <source src="/assets/video.mp4" type="video/mp4" />
        </video>
      </Stack>
      <Stack width={"30%"} alignItems={"start"} justifyContent={"center"} gap={2}>
        <Stack direction={"row"} gap={"20px"} alignItems={"Center"}>
          <Box
            sx={{
              content: "''",
              width: "50px",
              height: "1px",
              bgcolor: "white",
            }}
          />
          <Typography color="white">
            a solution to your digital success
          </Typography>
        </Stack>
        <Stack direction={"row"} gap={"10px"}>
          <Typography color="white" fontWeight={"bold"} fontSize={"30px"}>
            Our
          </Typography>
          <Typography color="#0c9265" fontWeight={"bold"} fontSize={"30px"}>
            Vision
          </Typography>
        </Stack>
        <Stack>
          <Typography color="#cacaca" fontSize={"20px"}>
            groundwork is a complete digital solutions agency that has been in
            operation since 2019 and is dedicated to helping brands build their
            online presence and achieve their online goals.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default SectionVideo