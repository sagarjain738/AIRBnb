import { Box, useStyleConfig, Divider, Text } from "@chakra-ui/react";

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
    >
      <Text marginBottom="1rem">Hi Sagar jain</Text>
      <Divider></Divider>
    </Box>
  );
}
