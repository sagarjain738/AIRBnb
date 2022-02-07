import { Flex, Text } from "@chakra-ui/react";
import { FaAirbnb } from "react-icons/fa";
import "@fontsource/roboto-mono";

export default function Left() {
  return (
    <Flex
      justifyContent="flex-start"
      alignItems="center"
      flexBasis="20%"
      _hover={{ cursor: "pointer" }}
    >
      {/* <Image src="src\Components\Assets\airbnb.png" w="6.5rem"></Image> */}
      <FaAirbnb fontSize="2.3rem"></FaAirbnb>
      <Text
        fontFamily="sans-serif"
        fontWeight="bold"
        letterSpacing="-.8px"
        marginLeft="2px"
        fontSize="1.4rem"
      >
        ɑirbnb
      </Text>
    </Flex>
  );
}
