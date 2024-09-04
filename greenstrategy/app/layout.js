"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { Roboto } from "@next/font/google";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 314,
      smm: 530,
      md: 768,
      lg: 1024,
      xl: 1220,
      xll: 1440,
      xxl: 1600,
    },
  },
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const metadata = {
  title: "Green n Strategy",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <body className={roboto.className}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
