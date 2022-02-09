import { Box, useStyleConfig, Flex, Text } from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function SearchSuggestion(props) {
  const { variant, children, display, index, data, ...rest } = props;
  const styless = useStyleConfig("LocationBoxx", { variant });

  return (
    <Box
      left="15.7rem"
      top="9.8rem"
      __css={styless}
      minWidth="31rem"
      minHeight="10rem"
      padding="2rem"
      display={display}
      zIndex={index}
    >
      <Flex textAlign="center" alignItems="center" marginBottom="1rem">
        <Box
          background="whitesmoke"
          border=".1px solid lightgrey"
          padding="1rem"
          borderRadius="7px"
        >
          <FaMapMarkerAlt></FaMapMarkerAlt>
        </Box>
        <Text marginLeft="1rem">{data}</Text>
      </Flex>
    </Box>
  );
}
