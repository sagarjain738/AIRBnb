const Cards = {
  baseStyle: {
    fontStyle: "sans-serif",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
  },
  sizes: {
    normal: {
      height: "23rem",
      width: "17.5rem",
    },
  },
  variants: {
    borderLess: {
      border: "none",
    },
  },
  defaultProps: {
    size: "normal",
    variant: "borderLess",
  },
};

export default Cards;
