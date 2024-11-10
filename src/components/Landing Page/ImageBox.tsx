import React from "react";
import x_image from "../../../public/assets/x_image.jpg";
import { Box, Image } from "@chakra-ui/react";

function ImageBox() {
  const imageUrl = x_image.src as string; // Convert x_image to a string

  return (
    <Box
      mb={{ base: 6, md: 0 }}
      w={{ base: "24", md: "52", lg: "80" }}
      h={{ base: "24", md: "52", lg: "80" }}
      rounded="lg"
      overflow="hidden"
    >
      <Image
        src={imageUrl}
        alt="Twitter Logo"
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
      />
    </Box>
  );
}

export default ImageBox;
