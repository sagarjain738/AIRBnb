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
} from "@chakra-ui/react";

import "@fontsource/flow-circular";
import { useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useBoolean } from "@chakra-ui/react";

export default function HotelFilters(props) {
  const { variant, children, display, index, onClose, ...rest } = props;
  const styles = useStyleConfig("LocationBoxx", { variant });

  const [roomDetails, setRoomDetails] = useState({
    beds: 0,
    bedrooms: 0,
    bathrooms: 0,
  });
  const [close, setClose] = useState({
    indexes: -2,
    displays: "none",
  });

  const [flag, setFlag] = useBoolean();

  const commonPadding = "1.2rem 2.3rem 0 1.5rem";
  return (
    <Box>
      <Box // Main Box
        __css={styles}
        zIndex={index}
        display={display}
        style={{
          maxWidth: "49.7rem",
          maxHeight: "35.5rem",
          position: "absolute",
          left: "-.4rem",
          top: "-1.3rem",

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
              <Link onClick={onClose}>
                <VscChromeClose></VscChromeClose>
              </Link>
            </Flex>
            <Flex flexBasis="90%" justifyContent="center">
              <Text fontWeight="550">More filters</Text>
            </Flex>
          </Flex>
          <Divider marginTop="1.2rem"></Divider>
        </Box>

        {/* Center scriolling Container */}

        <Box // Center Portion
          minWidth="48.7rem"
          maxHeight="26rem"
          overflowY="scroll"
          height="auto"
          padding={commonPadding}
        >
          {/* First Part */}

          <Box>
            <Text fontSize="1.4rem" fontWeight="550">
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
            <Text fontSize="1.4rem" fontWeight="600" marginTop="1.5rem">
              Verified places
            </Text>
            <Flex
              justifyContent="space-between"
              alignItems="center"
              marginTop="2.4rem"
            >
              <Box>
                <Text>Airbnb Plus</Text>
                <Text color="grey" fontSize=".9rem">
                  A selection of places to stay verified for quality and design
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
            <Divider marginTop="2.3rem "></Divider>
            <Flex
              justifyContent="space-between"
              alignItems="center"
              marginTop="4rem"
            >
              <Box>
                <Text fontWeight="500">Instant Book</Text>
                <Text color="grey" fontSize="15px" fontWeight="500">
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

          <Box marginTop="1.3rem">
            <Text fontSize="1.4rem" fontWeight="550">
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
            <Text fontSize="1.4rem" fontWeight="550">
              Accessibility features
            </Text>
            <Grid
              templateColumns="repeat(2, 5fr)"
              templateRows="repeat(2, 5fr)"
              marginTop="2rem"
              rowGap="1.4rem"
              alignItems="baseline"
            >
              <Checkbox size="lg">
                <Text marginLeft=".5rem" fontSize="1rem">
                  Step-free guest entrance
                </Text>
              </Checkbox>
              <Checkbox size="lg">
                <Text marginLeft=".5rem" fontSize="1rem">
                  Guest entrance wider than 32 inches (81 centimetres)
                </Text>
              </Checkbox>
              <Checkbox size="lg">
                <Text marginLeft=".5rem" fontSize="1rem">
                  Accessible parking spot
                </Text>
              </Checkbox>
              <Checkbox size="lg">
                <Text marginLeft=".5rem" fontSize="1rem">
                  Step-free path to the guest entrance
                </Text>
              </Checkbox>
            </Grid>
            <Link
              fontWeight="550"
              textDecoration="underline"
              fontSize="-moz-initial.9rem"
              onClick={() => setFlag.toggle()}
            >
              Show all accessibility features
            </Link>
            <Divider marginTop="2.5rem"></Divider>
          </Box>

          {/* Fourth Part */}
          <Box marginTop="1.7rem">
            <Text fontSize="1.4rem" fontWeight="550">
              Amenities
            </Text>
            <Grid
              templateColumns="repeat(2, 1fr)"
              templateRows="repeat(2, 1fr)"
              rowGap="1.5rem"
              marginTop="2rem"
              justifyContent="start"
              alignItems="start"
              marginBottom="1rem"
            >
              <Checkbox size="lg" fontFamily="Flow Circular">
                <Text marginLeft=".5rem" fontSize="1rem">
                  Wifi
                </Text>
              </Checkbox>

              <Checkbox size="lg">
                <Text marginLeft=".5rem" fontSize="1rem">
                  Kitchen
                </Text>
              </Checkbox>
              <Checkbox size="lg">
                <Text marginLeft=".5rem" fontSize="1rem">
                  Self check-in
                </Text>
              </Checkbox>
              <Checkbox size="lg">
                <Text marginLeft=".5rem" fontSize="1rem">
                  Pool
                </Text>
              </Checkbox>
            </Grid>

            <Link fontWeight="550" textDecoration="underline">
              Show all amenities
            </Link>
            <Divider marginTop="2.5rem"></Divider>
          </Box>

          {/* Fifth Part */}
          <Box marginTop="1.7rem">
            <Text fontSize="1.4rem" fontWeight="550">
              Property type
            </Text>
            <Grid
              templateColumns="repeat(2, 1fr)"
              templateRows="repeat(2, 1fr)"
              rowGap="1.5rem"
              marginTop="2rem"
              justifyContent="start"
              alignItems="start"
              marginBottom="1rem"
            >
              <Checkbox size="lg" font-family="Flow Circular">
                <Text marginLeft=".5rem" fontSize="1rem">
                  House
                </Text>
              </Checkbox>

              <Checkbox size="lg">
                <Text marginLeft=".5rem" fontSize="1rem">
                  Flat
                </Text>
              </Checkbox>
              <Checkbox size="lg">
                <Text marginLeft=".5rem" fontSize="1rem">
                  Bed and breakfast
                </Text>
              </Checkbox>
              <Checkbox size="lg">
                <Text marginLeft=".5rem" fontSize="1rem">
                  Boutique hotel
                </Text>
              </Checkbox>
            </Grid>

            <Link fontWeight="550" textDecoration="underline">
              Show all property types
            </Link>
            <Divider marginTop="2.5rem"></Divider>
          </Box>

          {/* sixth Part */}
          <Box marginTop="1.7rem">
            <Text fontSize="1.4rem" fontWeight="550">
              Unique stays
            </Text>
            <Grid
              templateColumns="repeat(2, 1fr)"
              templateRows="repeat(2, 1fr)"
              rowGap="1.5rem"
              marginTop="2rem"
              justifyContent="start"
              alignItems="start"
              marginBottom="1rem"
            >
              <Checkbox size="lg" font-family="Flow Circular">
                <Text marginLeft=".5rem" fontSize="1rem">
                  Barn
                </Text>
              </Checkbox>

              <Checkbox size="lg">
                <Text marginLeft=".5rem" fontSize="1rem">
                  Boat
                </Text>
              </Checkbox>
              <Checkbox size="lg">
                <Text marginLeft=".5rem" fontSize="1rem">
                  Campsite
                </Text>
              </Checkbox>
              <Checkbox size="lg">
                <Text marginLeft=".5rem" fontSize="1rem">
                  Casa particular (Cuba)
                </Text>
              </Checkbox>
            </Grid>

            <Link fontSize="1rem" fontWeight="550" textDecoration="underline">
              Show all unique stays
            </Link>
            <Divider marginTop="2.5rem"></Divider>
          </Box>

          {/* seventh Part */}
          <Box marginTop="1.7rem">
            <Text fontSize="1.4rem" fontWeight="550">
              House rules
            </Text>
            <Grid
              rowGap="1.5rem"
              marginTop="2rem"
              justifyContent="start"
              alignItems="start"
              marginBottom="1rem"
            >
              <Checkbox size="lg" font-family="Flow Circular">
                <Text marginLeft=".5rem" fontSize="1rem">
                  Smoking allowed
                </Text>
              </Checkbox>
            </Grid>
            <Divider marginTop="2rem"></Divider>
          </Box>

          {/* Eight'th Element */}
          <Box marginTop="1.7rem">
            <Text fontSize="1.4rem" fontWeight="550">
              Host language
            </Text>
            <Grid
              templateColumns="repeat(2, 1fr)"
              templateRows="repeat(2, 1fr)"
              rowGap="1.5rem"
              marginTop="2rem"
              justifyContent="start"
              alignItems="start"
              marginBottom="1rem"
            >
              <Checkbox size="lg" font-family="Flow Circular">
                <Text marginLeft=".5rem" fontSize="1rem">
                  English
                </Text>
              </Checkbox>

              <Checkbox size="lg">
                <Text marginLeft=".5rem" fontSize="1rem">
                  French
                </Text>
              </Checkbox>
              <Checkbox size="lg">
                <Text marginLeft=".5rem" fontSize="1rem">
                  German
                </Text>
              </Checkbox>
              <Checkbox size="lg">
                <Text marginLeft=".5rem" fontSize="1rem">
                  Japanese
                </Text>
              </Checkbox>
            </Grid>

            <Link fontSize="14px" fontWeight="550" textDecoration="underline">
              Show all
            </Link>
            <Divider marginTop="2.2rem"></Divider>
          </Box>
        </Box>

        {/* Bottom Footer */}

        <Box position="sticky">
          <Divider></Divider>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            height="5rem"
            padding="0 1.5rem"
          >
            <Button
              textDecoration="underline"
              fontWeight="550"
              letterSpacing=".2px"
              marginLeft="-.5rem"
              padding=".6rem"
              variant="ghost"
              _hover={{
                background: "#F7F7F7",
              }}
            >
              Clear all
            </Button>
            <Button
              backgroundColor="blackAlpha.900"
              color="white"
              padding="24px"
              transition=".1s"
              _hover={{ background: "black" }}
            >
              <Text fontWeight="550">Show 300+ stays</Text>
            </Button>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}

// https://airbnb.io/visx/gallery
// https://www.chartjs.org/

// chlakra modal
