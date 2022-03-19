import { extendTheme } from "@chakra-ui/react";

const Button = {
  baseStyle: {
    background: "transparent",
    fontWeight: "500",
  },
  sizes: {
    airBNB: {
      fontSize: "13px", // Actual sm,md or xl size i ahve to provide and in that object the font Size
    },
  },
  variants: {
    airBNB: {
      border: "1px solid lightgray",
      borderRadius: "40px",
      padding: "0 .9rem",
    },
  },
  //   defaultProps: {
  //     size: "custom",
  //     variant: "airBNB",
  //   },
};

export default Button;
