import { useStyleConfig, Box, Text } from "@chakra-ui/react";

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
      left="15.7rem"
      top="9.8rem"
      minWidth="31rem"
      minHeight="2rem"
    >
      {children}
    </Box>
  );
}
