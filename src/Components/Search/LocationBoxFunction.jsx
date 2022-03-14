import { useStyleConfig, Box, Text, Flex, Link } from "@chakra-ui/react";

export default function LocationBox(props) {
  const { variant, children, index, display, ...rest } = props;
  const styles = useStyleConfig("LocationBoxx", { variant });

  return (
    <Box
      display={display}
      __css={styles}
      {...rest}
      zIndex={index}
      transition="0.4s"
      left="-13rem"
      top="6rem"
      minWidth="25rem"
      minHeight="10.2rem"
    >
      <Text
        fontSize=".75rem"
        letterSpacing=".2px"
        fontWeight="bold"
        color="rgb(34, 34, 34)"
      >
        GO ANYWHERE, ANYTIME
      </Text>
      <Flex
        shadow="2xl"
        borderRadius="30px"
        marginTop="1rem"
        width="92%"
        height="3.7rem"
        border=".1px solid #DDDDDD"
        justifyContent="space-between"
        alignItems="center"
        padding="0 1rem"
        // marginBottom="2rem"
      >
        <Link
          color="rgb(111, 1, 156)"
          fontWeight="bold"
          fontSize="1.2rem"
          _hover={{ textDecoration: "none" }}
        >
          I'm flexible
        </Link>
      </Flex>
    </Box>
  );
}
