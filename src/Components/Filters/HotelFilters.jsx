import { Box, Flex, useStyleConfig, Text, Divider } from "@chakra-ui/react";
import { IoClose } from "react-icons/io5";
import { VscChromeClose } from "react-icons/vsc";

export default function HotelFilters(props) {
  const { variant, children, display, index, ...rest } = props;
  const styles = useStyleConfig("LocationBoxx", { variant });

  return (
    <Box
      __css={styles}
      style={{
        minWidth: "48.5rem",
        minHeight: "35.5rem",
        position: "absolute",
        left: "17rem",
        top: "-3.4rem",
        zIndex: 1,
        borderRadius: "10px",
        padding: 0,
        border: "1px solid grey",
      }}
    >
      <Flex padding="1.2rem 2.3rem 0 1.5rem">
        <Flex
          flexBasis="45%"
          width="1.7rem"
          height="1.7rem"
          borderRadius="full"
          transition=".2s"
          alignItems="center"
          justifyContent="flex-start"
          _hover={{
            background: "lightGrey",
          }}
        >
          <VscChromeClose></VscChromeClose>
        </Flex>
        <Flex flexBasis="50%">
          <Text fontWeight="550">More filters</Text>
        </Flex>
      </Flex>
      <Divider marginTop="1.2rem" background="red"></Divider>
      <Box>
        <Text fontSize="1.5rem" fontWeight="500">
          Rooms and beds
        </Text>
      </Box>
    </Box>
  );
}
