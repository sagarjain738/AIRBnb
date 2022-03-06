import { extendTheme } from "@chakra-ui/react";

const Button = {
  baseStyle: {
    background: "transparent",
    fontWeight: "500",
  },
  sizes: {
    airBNB: {
      fontSize: "14.5px",
    },
  },
  variants: {
    airBNB: {
      border: ".5px solid lightGrey",
      borderRadius: "40px",
      padding: "0 1.7rem",
    },
  },
  //   defaultProps: {
  //     size: "custom",
  //     variant: "airBNB",
  //   },
};

export default Button;