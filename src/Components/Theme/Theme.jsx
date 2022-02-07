import { extendTheme } from "@chakra-ui/react";
import Cards from "../Cards/Cards";
import LocationBoxx from "../Search/LocationBox";

const theme = extendTheme({
  components: {
    Cards,
    LocationBoxx,
  },
});

export default theme;
