import { Box, Text, Flex, Image, Button } from "@chakra-ui/react";

export default function PictureGrid() {
  return (
    <Box>
      <Box
        margin="auto"
        borderRadius="20px"
        maxWidth="1200px"
        minHeight="600px"
      >
        <Flex justifyContent="space-between">
          <Box objectFit="cover" flexBasis="49%" position="relative">
            <Image
              src="src\Components\PictureHolder\cave.jpg"
              borderRadius="10px"
              height="100%"
            ></Image>
            <Text
              position="absolute"
              top="2rem"
              left="2rem"
              color="white"
              fontSize="3rem"
              fontWeight="600"
              letterSpacing="-2px"
              lineHeight="2.7rem"
            >
              Things to do <br></br>
              on your trip
            </Text>
            <Button
              background="white"
              position="absolute"
              top="10rem"
              left="2rem"
              cursor="pointer"
            >
              Experiences
            </Button>
          </Box>
          <Box objectFit="cover" flexBasis="49%" position="relative">
            <Image
              src="src\Components\PictureHolder\cooking.jpg"
              height="100%"
              borderRadius="10px"
            ></Image>
            <Text
              position="absolute"
              top="2rem"
              left="2rem"
              color="white"
              fontSize="3rem"
              fontWeight="600"
              letterSpacing="-2px"
              lineHeight="2.7rem"
            >
              Things to do <br></br>
              from home
            </Text>
            <Button
              background="white"
              position="absolute"
              top="10rem"
              left="2rem"
              cursor="pointer"
            >
              Online Experiences
            </Button>
          </Box>
        </Flex>
      </Box>
      <Box
        maxWidth="100vw"
        marginTop="5.9rem"
        objectFit="contain"
        minHeight="600px"
        position="relative"
      >
        <Image
          src="src\Components\PictureHolder\cover.jpg"
          height="100%"
        ></Image>
        <Text
          position="absolute"
          color="white"
          fontSize="4.7rem"
          top="4rem"
          left="5rem"
          lineHeight="4.7rem"
          fontWeight="600"
        >
          Questions <br></br>
          about <br></br>
          hosting?<br></br>
        </Text>
        <Button
          cursor="pointer"
          background="white"
          position="absolute"
          top="49rem"
          left="5rem"
        >
          Ask a Superhost
        </Button>
      </Box>
    </Box>
  );
}
