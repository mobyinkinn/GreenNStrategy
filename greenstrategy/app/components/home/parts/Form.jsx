import { Box, Stack, Typography } from "@mui/material";
import bgImage from "@/public/assets/Shape-dots-arrow-right.png";

export default function Form() {
  return (
    <Stack
      backgroundColor={"black"}
      color={"white"}
      padding={"50px 50px"}
      margin={"50px 50px"}
      direction={"row"}
      sx={{ justifyContent: "space-around" }}
    >
      <Stack
        justifyContent={"center"}
        sx={{
          backgroundImage: `url('./Shape-dots-arrow-right.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box fontSize={"3rem"}>
          Where <span style={{ color: "limegreen" }}>Innovation </span> <br />{" "}
          Meets <span style={{ color: "limegreen" }}>Execution</span>
        </Box>
        <Typography marginTop={"10px"}>
          Book a call with our expert now
        </Typography>
      </Stack>

      <Stack gap={"20px"}>
        <Stack gap={"10px"} direction={"row"}>
          <input
            type="text"
            required
            style={{
              backgroundColor: "black",
              color: "#ddd",
              padding: "5px 5px 0 5px",
              fontSize: "1.2rem",
              height: "50px",
              outline: "none",
              borderRadius: "10px",
              border: "1px solid #ddd",
            }}
            placeholder="Name"
          />
          <input
            type="email"
            required
            style={{
              backgroundColor: "black",
              color: "#ddd",
              padding: "5px 5px 0 5px",
              fontSize: "1.2rem",
              height: "50px",
              outline: "none",
              borderRadius: "10px",
              border: "1px solid #ddd",
            }}
            placeholder="Email"
          />
        </Stack>
        <Stack>
          <input
            type="tel"
            required
            style={{
              backgroundColor: "black",
              color: "#ddd",
              padding: "5px 5px 0 5px",
              fontSize: "1.2rem",
              height: "50px",
              outline: "none",
              borderRadius: "10px",
              border: "1px solid #ddd",
            }}
            placeholder="Phone Number"
          />
        </Stack>
        <Stack>
          <textarea
            required
            style={{
              backgroundColor: "black",
              color: "#ddd",
              padding: "5px 5px 0 5px",
              fontSize: "1.2rem",
              height: "150px",
              outline: "none",
              borderRadius: "10px",
              border: "1px solid #ddd",
            }}
            rows={"10"}
            placeholder="Message..."
          />
        </Stack>
        <button className="btn-black">Submit</button>
      </Stack>
    </Stack>
  );
}
