import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import ImageBox from "./ImageBox";
import RegistrationText from "./RegistrationText";

function RegistrationBox() {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      minH="100vh"
      bg="black"
      p={4}
    >
      <Box
        p={{ base: 4, md: 10 }}
        border="2px"
        borderColor="gray.600"
        rounded="lg"
        bg="gray.800"
        shadow="lg"
        maxW={{ base: "md", md: "4xl", lg: "5xl", xl: "6xl" }}
        mx="auto"
        mt="10"
      >
        <Flex direction={{ base: "column", md: "row" }} align="center" gap={6}>
          <ImageBox />
          <RegistrationText />
        </Flex>
      </Box>
    </Flex>
  );
}

export default RegistrationBox;
