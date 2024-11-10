"use client";

import { Button } from "@chakra-ui/react";
import { title } from "process";
import React from "react";

interface LandingPageButtonProps {
  title: string;
  onClick: () => void;
  backgroundColor: string;
  color: string;
  hoverBackgroundColor: string;
}

function LandingPageButton({ title, onClick, backgroundColor, color, hoverBackgroundColor }: LandingPageButtonProps) {
  return (
    <Button
      borderRadius={"3xl"}
      color={color}
      backgroundColor={backgroundColor}
      _hover={{ backgroundColor: hoverBackgroundColor }}
      marginY={"2"}
      paddingX={"10"}
      paddingY={"6"}
      width={"60%"}
      fontSize={"xl"}
      fontWeight={"bold"}
      onClick={onClick}
    >
      {title}
    </Button>
  );
}

export default LandingPageButton;
