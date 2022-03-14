import {
  Box,
  useStyleConfig,
  Flex,
  Text,
  Button,
  Link,
  textDecoration,
} from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";

import { useSelector, useDispatch } from "react-redux";
import { addLocation } from "../GlobalStatesRedux/action";

export default function SearchSuggestion(props) {
  const { variant, children, display, index, data, ...rest } = props;
  const styless = useStyleConfig("LocationBoxx", { variant });
  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  return (
    <Box
      left="15.7rem"
      top="10rem"
      __css={styless}
      minWidth="25rem"
      minHeight="8rem"
      padding="2rem 2rem 0 2rem"
      display={display}
      zIndex={index}
    >
      {data.map((a, b) => {
        if (b <= 4) {
          return (
            <Flex textAlign="center" alignItems="center" marginBottom=".85rem">
              <Box
                background="whitesmoke"
                border=".1px solid lightgrey"
                padding="1rem"
                borderRadius="7px"
              >
                <FaMapMarkerAlt></FaMapMarkerAlt>
              </Box>
              <Button
                variant="ghost"
                _hover={{ textDecoration: "none" }}
                marginLeft="1rem"
                onClick={() => dispatch(addLocation(a.name))}
              >
                {a.name}, {a.state}
              </Button>
            </Flex>
          );
        } else {
          return;
        }
      })}
    </Box>
  );
}
