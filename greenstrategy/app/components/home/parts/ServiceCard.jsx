import { Box, Typography } from "@mui/material";

export default function ServiceCard({ name, data }) {
  return (
    <Box
      width={{
        xs: "80vw",
        md: "40vw",
        lg: "20vw",
      }}
      sx={{
        border: "1px solid white",
        borderRadius: "5px",
        padding: "15px",
        margin: "10px",
        cursor: "pointer",
        "&:hover": {
          transform: "scale(1.1)",
          transition: "all 0.5s ease",
        },
      }}
    >
      <h2 style={{ paddingBottom: "5px", borderBottom: "1px solid white" }}>
        {name}
      </h2>

      <Typography marginTop={"10px"}>{data}</Typography>
    </Box>
  );
}
