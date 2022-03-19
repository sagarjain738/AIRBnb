import { Box, Flex, Link } from "@chakra-ui/react";

export default function Center() {
  const backColor = "transparent";

  return (
    <Flex
      justifyContent="space-evenly"
      alignItems="center"
      flexBasis="40%"
      margin="auto"
      height="100%"
    >
      <Flex
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Link
          color="white"
          href="#"
          textDecor="none"
          fontSize="17px"
          lineHeight="20px"
          fontWeight="400"
          marginTop="1rem"
          _hover={{ textDecoration: "none" }}
        >
          Places to stay
        </Link>
        <div
          style={{
            height: "2px",
            background: "white",
            width: "1rem",
            marginTop: "10px",
          }}
        ></div>
      </Flex>

      <Flex
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Link
          marginLeft="-1rem"
          color="white"
          marginTop="1rem"
          href="#"
          textDecor="none"
          fontSize="17px"
          lineHeight="20px"
          fontWeight="400"
          _hover={{ textDecoration: "none" }}
        >
          Experiences
        </Link>
        <div
          style={{
            height: "2px",
            background: { backColor },
            width: "1rem",
            marginTop: "10px",
          }}
        ></div>
      </Flex>

      <Flex
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Link
          marginLeft="-1rem"
          color="white"
          href="#"
          textDecor="none"
          fontSize="17px"
          lineHeight="20px"
          fontWeight="400"
          marginTop="1rem"
          _hover={{ textDecoration: "none" }}
        >
          Online Experiences
        </Link>
        <div
          style={{
            height: "2px",
            background: { backColor },
            width: "1rem",
            marginTop: "10px",
          }}
        ></div>
      </Flex>
    </Flex>
  );
}
