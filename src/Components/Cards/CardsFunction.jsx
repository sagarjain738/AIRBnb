import { Box, Image, useStyleConfig, Text } from "@chakra-ui/react";

export default function Card(props) {
  const { variant, children, one, color, city, distance, ...rest } = props;
  const styles = useStyleConfig("Cards", { variant });

  return (
    <Box __css={styles} {...rest}>
      <Box flexBasis="50%" background="teal" borderTopRadius="10px">
        <Image
          src={one}
          objectFit="cover"
          width="100%"
          borderTopRadius="10px"
        ></Image>
      </Box>
      <Box
        flexBasis="50%"
        background={color}
        borderBottomRadius="10px"
        paddingLeft="1rem"
        paddingTop="1rem"
      >
        <Text fontSize="1.7rem" fontWeight="600" color="white">
          {city}
        </Text>
        <Text color="white">{distance}</Text>
      </Box>
    </Box>
  );
}
