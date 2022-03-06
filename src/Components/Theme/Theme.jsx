import { extendTheme } from "@chakra-ui/react";
import Cards from "../Cards/Cards";
import LocationBoxx from "../Search/LocationBox";
import Button from "../ButtonList/ButtonList";

const theme = extendTheme({
  components: {
    Cards,
    LocationBoxx,
    Button,
  },
});

export default theme;
