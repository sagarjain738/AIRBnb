const LocationBoxx = {
  baseStyle: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "30px",
    background: "white",
    position: "absolute",
    padding: "2rem 0 2rem 2rem",
    // fontSize: ".75rem",
    // letterSpacing: ".2px",
    // fontWeight: "bold",
    // color: "rgb(34, 34, 34)",
  },
  sizes: {
    normal: {},
  },
  variants: {
    borderLess: {
      border: "none",
    },
    withBorder: {
      border: "2px solid green",
    },
  },
  defaulProps: {
    size: "normal",
    variant: "borderLess",
  },
};

export default LocationBoxx;

// Unable to apply the dimension provided in sizes key to the created component
