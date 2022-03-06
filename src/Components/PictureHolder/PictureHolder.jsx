import { Box, Image, Text } from "@chakra-ui/react";
import "@fontsource/roboto-mono";

export default function PictureHolder() {
  return (
    <Box
      height="750px"
      margin="auto"
      position="relative"
      textAlign="center"
      background="black"
    >
      <Image
        boxSize="1200px"
        margin="auto"
        height="680px"
        objectFit="cover"
        borderRadius="15px"
        src="src\Components\PictureHolder\Picture.jpg"
        opacity=".5"
      ></Image>
      <Text
        position="absolute"
        top="57%"
        left="30%"
        color="white"
        fontSize="2.5rem"
        fontWeight="600"
        letterSpacing="-2px"
      >
        Not sure where to go? Perfect.
      </Text>
      <Text
        position="absolute"
        top="70%"
        left="42%"
        background="white"
        padding="1rem 2rem"
        borderRadius="30px"
        fontSize="1.2rem"
        fontWeight="600"
      >
        I'm flexible
      </Text>
      <Text
        position="absolute"
        top="70%"
        left="42%"
        background="white"
        padding="1rem 2rem"
        bgGradient="linear(to-r, #7928CA, #FF0080)"
        bgClip="text"
        borderRadius="30px"
        fontSize="1.2rem"
        fontWeight="600"
      >
        I'm flexible
      </Text>
    </Box>
  );
}
