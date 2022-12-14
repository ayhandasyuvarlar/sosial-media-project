import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Form from "./form";

export default function LoginPage() {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(max-width:1000px)");
  const isNonMobileTwoScreens = useMediaQuery("(max-width:500px)");
  console.log(isNonMobileScreens);
  return (
    <Box
      display={"flex"}
      flexDirection={isNonMobileScreens !== true ? "row" : "column"}
      alignItems={"center"}
      justifyContent={"space-around"}
    >
      <Box
        width={isNonMobileScreens !== true ? "50%" : "100%"}
        height={isNonMobileScreens !== true ? "100vh" : "50vh"}
        p={"0.6rem"}
        backgroundColor={theme.palette.background.alt}
        alignItems={"center"}
        display={"flex"}
        justifyContent={"center"}
      >
        <Typography
          fontWeight={"bold"}
          fontSize={isNonMobileTwoScreens !== true ? "60px" : "50px"}
          color={"primary"}
          textAlign={"center"}
        >
          Welcome to Socipedia, the Social Media for Sociopaths!
        </Typography>
      </Box>
      <Box
        width={isNonMobileScreens !== true ? "50%" : "100%"}
        height={isNonMobileScreens !== true ? "100vh" : "auto"}
        p={"0.6rem"}
        backgroundColor={theme.palette.background.alt}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Form/>
      </Box>
    </Box>
  );
}
