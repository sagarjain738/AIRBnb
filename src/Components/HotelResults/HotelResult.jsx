import { Grid, Text, Box, GridItem, Flex, Divider } from "@chakra-ui/react";
import Maps from "../Map/Map";
import Hotels from "../Hotels/Hotels";
export default function HotelResult() {
  return (
    <Box>
      <Flex>
        <Box
          width="58.5%"
          maxHeight="80vh"
          top="23%"
          left="0%"
          marginTop="9.2rem"
        >
          <Box>
            <Hotels></Hotels>
          </Box>
        </Box>
        <Box
          position="fixed"
          maxHeight="80vh"
          flexBasis="42%"
          top="23%"
          right="0"
        >
          <Maps />
        </Box>
      </Flex>
    </Box>
  );
}
