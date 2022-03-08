import {
  Box,
  Flex,
  useStyleConfig,
  Text,
  Divider,
  Button,
  Circle,
  Switch,
  Link,
  Grid,
  Checkbox,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalContent,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export default function HotelFilters(props) {
  const { variant, children, display, index, ...rest } = props;
  const styles = useStyleConfig("LocationBoxx", { variant });
  console.log("After clicking button", display, index);
  const [roomDetails, setRoomDetails] = useState({
    beds: 0,
    bedrooms: 0,
    bathrooms: 0,
  });
  const [close, setClose] = useState({
    indexes: -2,
    displays: "none",
  });

  const commonPadding = "1.2rem 2.3rem 0 1.2rem";
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Button onClick={isOpen}>Open PopUp</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>Heading</ModalHeader>
          <ModalBody>
            <Box // Main Box
              __css={styles}
              zIndex={index}
              display={display}
              style={{
                maxWidth: "48.5rem",
                maxHeight: "35.5rem",
                position: "absolute",
                left: "17rem",
                top: "-3.4rem",

                borderRadius: "10px",
                padding: 0,
                border: "1px solid grey",
              }}
            >
              {/*  Top Header */}

              <Box position="sticky">
                <Flex padding={commonPadding}>
                  <Flex
                    width="1.7rem"
                    height="1.7rem"
                    borderRadius="full"
                    transition=".2s"
                    alignItems="center"
                    justifyContent="center"
                    _hover={{
                      background: "lightGrey",
                      cursor: "pointer",
                    }}
                  >
                    <Link
                      onClick={() => {
                        setClose({ displays: "none", indexes: -2 });
                      }}
                    >
                      <VscChromeClose></VscChromeClose>
                    </Link>
                  </Flex>
                  <Flex flexBasis="90%" justifyContent="center">
                    <Text fontWeight="550">More filters</Text>
                  </Flex>
                </Flex>
              </Box>

              <Divider marginTop="1.2rem" background="red"></Divider>

              {/* Center scriolling Container */}
              <Box // Main Container
                minWidth="48.5rem"
                maxHeight="26rem"
                overflowY="scroll"
                height="auto"
                padding={commonPadding}
              >
                {/* First Part */}

                <Box>
                  <Text fontSize="1.5rem" fontWeight="500">
                    Rooms and beds
                  </Text>
                  <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    textAlign="center"
                    marginTop="1.7rem"
                  >
                    <Text>Beds</Text>
                    <Flex
                      flexBasis="15%"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Circle
                        borderRadius="full"
                        width="2rem"
                        height="2rem"
                        background="transparent"
                        border=".2px solid grey"
                      >
                        <AiOutlineMinus></AiOutlineMinus>
                      </Circle>
                      {roomDetails.beds}
                      <Circle
                        borderRadius="full"
                        width="2rem"
                        height="2rem"
                        background="transparent"
                        border=".2px solid grey"
                      >
                        <AiOutlinePlus></AiOutlinePlus>
                      </Circle>
                    </Flex>
                  </Flex>
                  <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    textAlign="center"
                    marginTop="1.7rem"
                  >
                    <Text>Bedrooms</Text>
                    <Flex
                      flexBasis="15%"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Circle
                        borderRadius="full"
                        width="2rem"
                        height="2rem"
                        background="transparent"
                        border=".2px solid grey"
                      >
                        <AiOutlineMinus></AiOutlineMinus>
                      </Circle>
                      {roomDetails.bedrooms}
                      <Circle
                        borderRadius="full"
                        width="2rem"
                        height="2rem"
                        background="transparent"
                        border=".2px solid grey"
                      >
                        <AiOutlinePlus></AiOutlinePlus>
                      </Circle>
                    </Flex>
                  </Flex>
                  <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    textAlign="center"
                    marginTop="1.7rem"
                  >
                    <Text>Bathrooms</Text>
                    <Flex
                      flexBasis="15%"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Circle
                        borderRadius="full"
                        width="2rem"
                        height="2rem"
                        background="transparent"
                        border=".2px solid grey"
                      >
                        <AiOutlineMinus></AiOutlineMinus>
                      </Circle>
                      {roomDetails.bathrooms}
                      <Circle
                        borderRadius="full"
                        width="2rem"
                        height="2rem"
                        background="transparent"
                        border=".2px solid grey"
                      >
                        <AiOutlinePlus></AiOutlinePlus>
                      </Circle>
                    </Flex>
                  </Flex>
                  <Divider marginTop="2.5rem"></Divider>
                  <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    marginTop="3.7rem"
                  >
                    <Box>
                      <Text>Instant Book</Text>
                      <Text color="grey" fontSize=".9rem">
                        Listings you can book without waiting for host approval
                      </Text>
                    </Box>
                    <Box>
                      <Switch
                        size="lg"
                        color="black"
                        outlineColor="transparent"
                        colorScheme="blackAlpha"
                      />
                    </Box>
                  </Flex>

                  <Divider marginTop="2.5rem"></Divider>
                </Box>

                {/* Second Part */}

                <Box>
                  <Text fontSize="1.3rem" fontWeight="600">
                    More options
                  </Text>
                  <Flex alignItems="center" justifyContent="space-between">
                    <Box marginTop="2rem">
                      <Text>Superhost</Text>
                      <Text color="gray">Stay with recognised hosts</Text>
                      <Link
                        fontSize=".9rem"
                        fontWeight="550"
                        textDecoration="underline"
                      >
                        Learn more
                      </Link>
                    </Box>
                    <Box marginTop="2rem">
                      <Switch size="lg"></Switch>
                    </Box>
                  </Flex>
                  <br></br>
                  <Flex alignItems="center" justifyContent="space-between">
                    <Box>
                      <Text>Free cancellation</Text>
                      <Text color="grey">
                        Only show stays that offer free cancellation
                      </Text>
                    </Box>
                    <Box>
                      <Switch size="lg"></Switch>
                    </Box>
                  </Flex>
                  <Divider marginTop="2.5rem"></Divider>
                </Box>

                {/* Third Part */}

                <Box marginTop="1.7rem">
                  <Text fontSize="1.3rem" fontWeight="600">
                    Accessibility features
                  </Text>
                  <Grid
                    templateColumns="repeat(2, 1fr)"
                    templateRows="repeat(2, 1fr)"
                    marginTop="2rem"
                    rowGap="1.4rem"
                  >
                    <Checkbox size="lg">Step-free guest entrance</Checkbox>
                    <Checkbox size="lg">
                      Guest entrance wider than 32 inches (81 centimetres)
                    </Checkbox>
                    <Checkbox size="lg">Accessible parking spot</Checkbox>
                    <Checkbox size="lg">
                      Step-free path to the guest entrance
                    </Checkbox>
                  </Grid>
                </Box>
              </Box>

              {/* Bottom Footer */}

              <Box position="sticky">
                <Divider></Divider>
                <Flex
                  justifyContent="space-between"
                  alignItems="center"
                  height="5rem"
                  padding={commonPadding}
                >
                  <Text textDecoration="underline">Clear all</Text>
                  <Button
                    backgroundColor="black"
                    color="white"
                    padding="24px 20px"
                  >
                    <Text fontWeight="550">Show 300+ stays</Text>
                  </Button>
                </Flex>
              </Box>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

// https://airbnb.io/visx/gallery
// https://www.chartjs.org/

// chlakra modal
