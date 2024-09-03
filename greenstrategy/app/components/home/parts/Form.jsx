// import { Box, Stack, Typography } from "@mui/material";
// import bgImage from "@/public/assets/Shape-dots-arrow-right.png";

// export default function Form() {
//   return (
//     <Stack
//       backgroundColor={"black"}
//       color={"white"}
//       padding={"50px 50px"}
//       margin={"50px 50px"}
//       direction={"row"}
//       sx={{ justifyContent: "space-around" }}
//     >
//       <Stack
//         justifyContent={"center"}
//         sx={{
//           backgroundImage: `url${bgImage}`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <Box fontSize={"3rem"}>
//           Where <span style={{ color: "limegreen" }}>Innovation </span> <br />{" "}
//           Meets <span style={{ color: "limegreen" }}>Execution</span>
//         </Box>
//         <Typography marginTop={"10px"}>
//           Book a call with our expert now
//         </Typography>
//       </Stack>

//       <Stack gap={"20px"}>
//         <Stack gap={"10px"} direction={"row"}>
//           <input
//             type="text"
//             required
//             style={{
//               backgroundColor: "black",
//               color: "#ddd",
//               padding: "5px 5px 0 5px",
//               fontSize: "1.2rem",
//               height: "50px",
//               outline: "none",
//               borderRadius: "10px",
//               border: "1px solid #ddd",
//             }}
//             placeholder="Name"
//           />
//           <input
//             type="email"
//             required
//             style={{
//               backgroundColor: "black",
//               color: "#ddd",
//               padding: "5px 5px 0 5px",
//               fontSize: "1.2rem",
//               height: "50px",
//               outline: "none",
//               borderRadius: "10px",
//               border: "1px solid #ddd",
//             }}
//             placeholder="Email"
//           />
//         </Stack>
//         <Stack>
//           <input
//             type="tel"
//             required
//             style={{
//               backgroundColor: "black",
//               color: "#ddd",
//               padding: "5px 5px 0 5px",
//               fontSize: "1.2rem",
//               height: "50px",
//               outline: "none",
//               borderRadius: "10px",
//               border: "1px solid #ddd",
//             }}
//             placeholder="Phone Number"
//           />
//         </Stack>
//         <Stack>
//           <textarea
//             required
//             style={{
//               backgroundColor: "black",
//               color: "#ddd",
//               padding: "5px 5px 0 5px",
//               fontSize: "1.2rem",
//               height: "150px",
//               outline: "none",
//               borderRadius: "10px",
//               border: "1px solid #ddd",
//             }}
//             rows={"10"}
//             placeholder="Message..."
//           />
//         </Stack>
//         <button className="btn-black">Submit</button>
//       </Stack>
//     </Stack>
//   );
// }

// import { Box, Stack, Typography } from "@mui/material";
// import bgImage from "@/public/assets/Shape-dots-arrow-right.png";

// export default function Form() {
//   return (
//     <Stack
//       backgroundColor={"black"}
//       color={"white"}
//       padding={"50px 50px"}
//       margin={"50px 50px"}
//       direction={"row"}
//       sx={{ justifyContent: "space-around" }}
//     >
//       <Stack
//         justifyContent={"center"}
//         sx={{
//           backgroundImage: `url(${bgImage.src})`, // Correct use of url()
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           height: "350px", // Add height to ensure visibility
//           width: "50%", // Adjust width if necessary
          
//         }}
//       >
//         <Box fontSize={"3rem"}>
//           Where <span style={{ color: "limegreen" }}>Innovation </span> <br />{" "}
//           Meets <span style={{ color: "limegreen" }}>Execution</span>
//         </Box>
//         <Typography marginTop={"10px"}>
//           Book a call with our expert now
//         </Typography>
//       </Stack>

//       <Stack gap={"20px"}>
//         <Stack gap={"10px"} direction={"row"}>
//           <input
//             type="text"
//             required
//             style={{
//               backgroundColor: "black",
//               color: "#ddd",
//               padding: "5px 5px 0 5px",
//               fontSize: "1.2rem",
//               height: "50px",
//               outline: "none",
//               borderRadius: "10px",
//               border: "1px solid #ddd",
//             }}
//             placeholder="Name"
//           />
//           <input
//             type="email"
//             required
//             style={{
//               backgroundColor: "black",
//               color: "#ddd",
//               padding: "5px 5px 0 5px",
//               fontSize: "1.2rem",
//               height: "50px",
//               outline: "none",
//               borderRadius: "10px",
//               border: "1px solid #ddd",
//             }}
//             placeholder="Email"
//           />
//         </Stack>
//         <Stack>
//           <input
//             type="tel"
//             required
//             style={{
//               backgroundColor: "black",
//               color: "#ddd",
//               padding: "5px 5px 0 5px",
//               fontSize: "1.2rem",
//               height: "50px",
//               outline: "none",
//               borderRadius: "10px",
//               border: "1px solid #ddd",
//             }}
//             placeholder="Phone Number"
//           />
//         </Stack>
//         <Stack>
//           <textarea
//             required
//             style={{
//               backgroundColor: "black",
//               color: "#ddd",
//               padding: "5px 5px 0 5px",
//               fontSize: "1.2rem",
//               height: "150px",
//               outline: "none",
//               borderRadius: "10px",
//               border: "1px solid #ddd",
//             }}
//             rows={"10"}
//             placeholder="Message..."
//           />
//         </Stack>
//         <button className="btn-black">Submit</button>
//       </Stack>
//     </Stack>
//   );
// }


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
          position: "relative", // Make sure the Stack is positioned relative for pseudo-element positioning
          height: "300px", // Set height for visibility
          width: "50%", // Adjust width if necessary
          "&::before": {
            content: '""',
            backgroundImage: `url(${bgImage.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.5, // Set the desired opacity for the background image
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
          },
        }}
      >
        <Box
          fontSize={"3rem"}
          sx={{ position: "relative", zIndex: 1 }} // Ensure text is above the pseudo-element
        >
          Where <span style={{ color: "limegreen" }}>Innovation </span> <br />{" "}
          Meets <span style={{ color: "limegreen" }}>Execution</span>
        </Box>
        <Typography marginTop={"10px"} sx={{ position: "relative", zIndex: 1 }}>
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
              padding: "5px 5px 5px 15px",
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
              padding: "5px 5px 5px 15px",
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
              padding: "5px 5px 5px 15px",
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
              padding: "5px 5px 5px 15px",
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
