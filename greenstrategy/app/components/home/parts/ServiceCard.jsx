import { Box, Stack, Typography } from "@mui/material";

export default function ServiceCard({ name, data }) {
  return (
    <Stack
      width={{
        xs: "80vw",
        md: "40vw",
        lg: "20vw",
      }}
      sx={{
        justifyContent: "space-between",
        border: "1px solid white",
        borderRadius: "5px",
        padding: "30px",
        margin: "10px",
        cursor: "pointer",
        "&:hover": {
          transform: "scale(1.1)",
          transition: "all 0.5s ease",
        },
      }}
    >
      <Box margin={"0 0 30px 0"}>
        <h2 style={{ paddingBottom: "5px", borderBottom: "1px solid white" }}>
          {name}
        </h2>

        <Typography marginTop={"10px"} sx={{ textAlign: "justify" }}>
          {data}
        </Typography>
      </Box>
      <button className="btn-black">Book a Call</button>
    </Stack>
  );
}
