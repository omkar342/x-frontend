"use client";

import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import LandingPageButton from "../Buttons/LandingPageButton";

function RegistrationText() {
  const handleLogin = () => {};

  const handleGuestLogin = () => {};

  const handleRegister = () => {
    // return;
  };

  return (
    <Box textAlign={{ base: "center", md: "left" }} color="white">
      <Heading as="h1" size={{ base: "lg", md: "2xl" }} mb={2}>
        Happening Now
      </Heading>
      <Text fontSize={{ base: "sm", md: "xl" }} color="gray.300">
        Join us today!
      </Text>
      <Box textAlign={"center"} marginY={"4"}>
        <LandingPageButton
          title={"Login With Existing Guest Credentials"}
          onClick={handleGuestLogin}
          backgroundColor="#fff"
          color="#000"
          hoverBackgroundColor="#f0f0f0"
        />
        <LandingPageButton
          title={"Login"}
          onClick={handleLogin}
          backgroundColor="#fff"
          color="#000"
          hoverBackgroundColor="#f0f0f0"
        />
        <LandingPageButton
          title={"Create Account"}
          onClick={handleRegister}
          backgroundColor="#1D9BF0"
          color="#fff"
          hoverBackgroundColor="#188CC0"
        />
      </Box>
    </Box>
  );
}

export default RegistrationText;
