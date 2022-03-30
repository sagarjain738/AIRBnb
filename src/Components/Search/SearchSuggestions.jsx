import {
  Box,
  useStyleConfig,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
} from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";

import { useSelector, useDispatch } from "react-redux";
import { addLocation } from "../GlobalStatesRedux/action";

export default function SearchSuggestion(props) {
  const {
    variant,
    children,
    display,
    index,
    data,
    onCloseSearchSuggestion,
    onOpenSearchSuggestion,
    isOpenSearchSuggestion,
    ...rest
  } = props;
  const styless = useStyleConfig("LocationBoxx", { variant });
  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  return (
    <Box
      left="-13rem"
      top="6rem"
      __css={styless}
      minWidth="25rem"
      minHeight="9rem"
      padding="1.5rem 0 .5rem 0"
      display={display}
      zIndex={index}
    >
      {data.map((a, b) => {
        if (b <= 4) {
          return (
            <Flex
              key={b}
              textAlign="center"
              _hover={{
                cursor: "pointer",
                background: "lightGrey",
              }}
              alignItems="center"
              padding=".5rem 0 .3rem 2rem"
              height="100%"
              width="100%"
            >
              <Box
                background="whitesmoke"
                border=".1px solid lightgrey"
                padding="1rem"
                borderRadius="7px"
              >
                <FaMapMarkerAlt></FaMapMarkerAlt>
              </Box>
              <Box
                variant="ghost"
                _hover={{
                  textDecoration: "none",
                  background: "lightGrey",
                }}
                marginLeft="1rem"
                onClick={() => dispatch(addLocation(a.name))}
              >
                {a.name}, {a.state}
              </Box>
            </Flex>
          );
        } else {
          return;
        }
      })}
    </Box>
  );
}
