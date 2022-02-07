import { Box, Flex, Link } from "@chakra-ui/react";

export default function Center() {
  return (
    <Flex
      justifyContent="space-evenly"
      alignItems="center"
      flexBasis="40%"
      paddingLeft="1rem"
      paddingRight="1rem"
    >
      <Link
        color="white"
        href="#"
        textDecor="none"
        fontSize="17px"
        lineHeight="20px"
        fontWeight="400"
        _hover={{ textDecoration: "none" }}
      >
        Places to stay
      </Link>

      <Link
        marginLeft="-1rem"
        color="white"
        href="#"
        textDecor="none"
        fontSize="17px"
        lineHeight="20px"
        fontWeight="400"
        _hover={{ textDecoration: "none" }}
      >
        Experiences
      </Link>

      <Link
        marginLeft="-1rem"
        color="white"
        href="#"
        textDecor="none"
        fontSize="17px"
        lineHeight="20px"
        fontWeight="400"
        _hover={{ textDecoration: "none" }}
      >
        Online Experiences
      </Link>
    </Flex>
  );
}
