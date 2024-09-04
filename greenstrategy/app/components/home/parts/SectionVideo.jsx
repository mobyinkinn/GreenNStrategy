import { Box, Stack, Typography } from '@mui/material';
import React from 'react'
const SectionVideo = () => {
  return (
    <Stack direction={"row"} pt={5}>
      <Stack width={"65%"}>
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
      <Stack direction={"row"} alignItems={"Center"} justifyContent={"center"} gap={"20px"}>
        <Box sx={{ content: "''", width: "50px", height: "1px", bgcolor:"white" }} />
        <Typography color='white'>a solution to your digital success</Typography>
      </Stack>
    </Stack>
  );
}

export default SectionVideo