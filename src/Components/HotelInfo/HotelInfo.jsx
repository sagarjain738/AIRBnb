import {
  Box,
  Flex,
  Text,
  Grid,
  GridItem,
  Image,
  Divider,
  Link,
  Button,
} from "@chakra-ui/react";
import {
  AiOutlineHeart,
  AiTwotoneStar,
  AiOutlineRight,
  AiOutlineCar,
  AiFillFlag,
} from "react-icons/ai";
import { BsDoorOpen, BsBookmark, BsKeyboard } from "react-icons/bs";
import { BiRupee, BiCctv } from "react-icons/bi";
import { GrKey, GrWifi } from "react-icons/gr";
import { FiShare, FiMonitor } from "react-icons/fi";
import { GiFlowerPot, GiSaloonDoors } from "react-icons/gi";
import { FaSwimmingPool, FaRegSnowflake } from "react-icons/fa";
import { MdWebAssetOff, MdOutlineAlarmOff } from "react-icons/md";
import { useState } from "react";

import { isSameDay } from "date-fns";
import { enGB } from "date-fns/locale";
import { Calendar } from "react-nice-dates";
import "react-nice-dates/build/style.css";

export default function HotelInfo() {
  const [selectedDates, setSelectedDates] = useState([]);
  const modifiers = {
    selected: (date) =>
      selectedDates.some((selectedDate) => isSameDay(selectedDate, date)),
  };
  const handleDayClick = (date) => {
    setSelectedDates([...selectedDates, date]);
  };

  return (
    <Box padding="1.3% 8%">
      {/* Heading */}

      <Text color="black" fontSize="1.7rem" fontWeight="550">
        LaMer-Designer Studio , Lush Greenery- Reis Magos
      </Text>

      {/* Details */}
      <Flex justifyContent="space-between" marginTop=".9%">
        <Flex>
          <AiTwotoneStar
            style={{ color: "#FF385C", marginTop: "4px" }}
          ></AiTwotoneStar>
          <span
            style={{
              fontWeight: "550",
            }}
          >
            4.76
            <span
              style={{
                textDecoration: "underline",
                fontWeight: "550",
              }}
            >
              25 reviews
            </span>
            <span
              style={{
                color: "gray",
              }}
            >
              North goa,goa, india
            </span>
          </span>
        </Flex>
        <Flex
          alignItems="center"
          flexBasis="12%"
          justifyContent="space-between"
        >
          <FiShare></FiShare>
          <Text textDecoration="underline">Share</Text>
          <AiOutlineHeart></AiOutlineHeart>
          <Text textDecoration="underline">Save</Text>
        </Flex>
      </Flex>

      {/* Pictures */}
      <Box>
        <Grid
          templateColumns="repeat(4,1fr)"
          templateRows="repeat(2,1fr)"
          gap="2"
          marginTop="2%"
        >
          <GridItem rowSpan={2} h="20rem" colSpan={2} objectFit="cover">
            <Image
              borderRadius="15px 0 0 15px"
              height="102.5%"
              width="100%"
              src="https://source.unsplash.com/1000x850/?swiming pool"
              _hover={{
                opacity: ".8",
                color: "red",
              }}
            ></Image>
          </GridItem>
          <GridItem rowSpan={1} h="10rem" colSpan={1}>
            <Image
              height="100%"
              width="100%"
              src="https://source.unsplash.com/1000x850/?hotel room"
            ></Image>
          </GridItem>
          <GridItem rowSpan={1} h="10rem" colSpan={1}>
            <Image
              borderRadius="0 15px 0 0"
              height="100%"
              width="100%"
              src="https://source.unsplash.com/1000x850/?hotel room"
            ></Image>
          </GridItem>
          <GridItem rowSpan={1} h="10rem" colSpan={1}>
            <Image
              height="100%"
              width="100%"
              src="https://source.unsplash.com/1000x850/?hotel room"
            ></Image>
          </GridItem>
          <GridItem rowSpan={1} h="10rem" colSpan={1}>
            <Image
              borderRadius="0 0 15px 0"
              height="100%"
              width="100%"
              src="https://source.unsplash.com/1000x850/?hotel room"
            ></Image>
          </GridItem>
        </Grid>
      </Box>

      <Box marginTop="1rem">
        <Grid
          templateColumns="repeat(5,1fr)"
          margin="3rem 0"
          position="relative"
        >
          <GridItem colSpan="3">
            {/* First Container */}

            <Box>
              <Flex justifyContent="space-between" alignItems="center">
                <Box>
                  <Text
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "550",
                      color: "black",
                    }}
                  >
                    Entire rental unit hosted by TheBlueKite
                  </Text>
                  <Text>2 guests1 bedroom1 bed1 bathroom</Text>
                </Box>
                <Box
                  flexBasis="8%"
                  objectFit="contain"
                  borderRadius="100px"
                  border="1px solid #f7f7f7"
                  cursor="pointer"
                  _hover={{
                    cursor: "pointer",
                  }}
                >
                  <Image
                    src="./note.webp"
                    borderRadius="100px"
                    width="100%"
                    height="100%"
                    _hover={{
                      cursor: "pointer",
                    }}
                  ></Image>
                </Box>
              </Flex>
            </Box>

            {/* Divider  */}

            <Box
              marginBottom="1.7rem"
              height="1px"
              background="lightGrey"
            ></Box>

            {/* Card */}

            <Box>
              <Flex marginBottom="1rem" alignItems="flex-start">
                <Box>
                  <BsDoorOpen
                    style={{
                      fontSize: "1.5rem",
                      marginTop: "20%",
                    }}
                  ></BsDoorOpen>
                </Box>
                <Box marginLeft="1rem">
                  <Text fontWeight="650" color="black">
                    Self check-in
                  </Text>
                  <Text color="rgb(113, 113, 113)" letterSpacing="-1px">
                    You can check in with the doorperson.
                  </Text>
                </Box>
              </Flex>
              <Flex marginBottom="1rem" alignItems="flex-start">
                <Box>
                  <GrKey
                    style={{
                      fontSize: "1.5rem",
                      marginTop: "20%",
                    }}
                  ></GrKey>
                </Box>
                <Box marginLeft="1rem">
                  <Text fontWeight="650" color="black">
                    Great check-in experience
                  </Text>
                  <Text color="rgb(113, 113, 113)" letterSpacing="-1px">
                    92% of recent guests gave the check-in process a 5-star
                    rating.
                  </Text>
                </Box>
              </Flex>
              <Flex marginBottom="1rem" alignItems="flex-start">
                <Box>
                  <BsBookmark
                    style={{
                      fontSize: "1.5rem",
                      marginTop: "20%",
                    }}
                  ></BsBookmark>
                </Box>
                <Box marginLeft="1rem">
                  <Text fontWeight="650" color="black">
                    Pool
                  </Text>
                  <Text color="rgb(113, 113, 113)" letterSpacing="-1px">
                    Guests often search for this popular amenity
                  </Text>
                </Box>
              </Flex>
            </Box>

            {/* Divider  */}
            <Box margin="1.7rem 0" height="1px" background="lightGrey"></Box>

            {/* Description */}
            <Box>
              <Text>
                You will love staying in the peaceful neighborhood of Reis Magos
                which is still very natural yet its 10 mins away from Candolim
                beach. The complex has a nice swimming pool, 24 hour security
                and housekeeping staff which will clean your apartment once a
                day. This Studio apartment is perfect for couples. Please note
                -There no proper kitchen with stove -only a microwave, fridge,
                toaster and kettle - it is not ideal for a long term stay
              </Text>
              <Flex margin="2rem 0 3rem 0">
                <Text
                  style={{
                    fontWeight: "600",
                    marginRight: ".5%",
                  }}
                  _hover={{
                    cursor: "pointer",
                  }}
                >
                  Show more
                </Text>
                <AiOutlineRight
                  style={{
                    display: "inline",
                    marginTop: "1%",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                />
              </Flex>
            </Box>

            {/* Divider  */}
            <Box margin="2.5rem 0" height="1px" background="lightGrey"></Box>

            {/* Where you'll sleep  */}

            <Box>
              <Text fontSize="1.5rem" fontWeight="550">
                Where you'll sleep
              </Text>
              <Box
                margin="1rem 0"
                height="33vh"
                width="25vw"
                objectFit="contain"
                borderRadius="10px"
              >
                <Image
                  borderRadius="10px"
                  width="100%"
                  height="100%"
                  src="https://source.unsplash.com/1000x850/?bedroom"
                ></Image>
              </Box>
              <Text fontWeight="600">Bedroom</Text>
              <Text>1 double bed</Text>
            </Box>

            {/* Divider  */}
            <Box margin="2.5rem 0" height="1px" background="lightGrey"></Box>

            {/* what this place Offers */}

            <Box>
              <Text fontSize="1.5rem" fontWeight="550">
                what this place Offers{" "}
              </Text>
              <Grid
                templateColumns="repeat(2,1fr)"
                templateRows="repeat(5,1fr)"
                gap="5"
                marginTop="1rem"
              >
                <GridItem colSpan={1} rowSpan={1}>
                  <Flex alignItems="center" gap="1rem">
                    <GiFlowerPot
                      style={{
                        fontSize: "1.5rem",
                      }}
                    ></GiFlowerPot>
                    <Text>Garden view</Text>
                  </Flex>
                </GridItem>
                <GridItem colSpan={1} rowSpan={1}>
                  <Flex alignItems="center" gap="1rem">
                    <GrWifi
                      style={{
                        fontSize: "1.5rem",
                      }}
                    ></GrWifi>
                    <Text>Wifi</Text>
                  </Flex>
                </GridItem>
                <GridItem colSpan={1} rowSpan={1}>
                  <Flex alignItems="center" gap="1rem">
                    <AiOutlineCar
                      style={{
                        fontSize: "1.5rem",
                      }}
                    ></AiOutlineCar>
                    <Text>Free parking on premises</Text>
                  </Flex>
                </GridItem>
                <GridItem colSpan={1} rowSpan={1}>
                  <Flex alignItems="center" gap="1rem">
                    <FaSwimmingPool
                      style={{
                        fontSize: "1.5rem",
                      }}
                    ></FaSwimmingPool>
                    <Text>Shared pool</Text>
                  </Flex>
                </GridItem>
                <GridItem colSpan={1} rowSpan={1}>
                  <Flex alignItems="center" gap="1rem">
                    <FiMonitor
                      style={{
                        fontSize: "1.5rem",
                      }}
                    ></FiMonitor>
                    <Text>TV with standard cable/satellite</Text>
                  </Flex>
                </GridItem>
                <GridItem colSpan={1} rowSpan={1}>
                  <Flex alignItems="center" gap="1rem">
                    <FaRegSnowflake
                      style={{
                        fontSize: "1.5rem",
                      }}
                    ></FaRegSnowflake>
                    <Text>Air conditioning</Text>
                  </Flex>
                </GridItem>
                <GridItem colSpan={1} rowSpan={1}>
                  <Flex alignItems="center" gap="1rem">
                    <GiSaloonDoors
                      style={{
                        fontSize: "1.5rem",
                      }}
                    ></GiSaloonDoors>
                    <Text>Shared patio or balcony</Text>
                  </Flex>
                </GridItem>
                <GridItem colSpan={1} rowSpan={1}>
                  <Flex alignItems="center" gap="1rem">
                    <BiCctv
                      style={{
                        fontSize: "1.5rem",
                      }}
                    ></BiCctv>
                    <Text>Security cameras on property</Text>
                  </Flex>
                </GridItem>
                <GridItem colSpan={1} rowSpan={1}>
                  <Flex alignItems="center" gap="1rem">
                    <MdWebAssetOff
                      style={{
                        fontSize: "1.5rem",
                      }}
                    ></MdWebAssetOff>
                    <Text>Carbon monoxide alarm</Text>
                  </Flex>
                </GridItem>
                <GridItem colSpan={1} rowSpan={1}>
                  <Flex alignItems="center" gap="1rem">
                    <MdOutlineAlarmOff
                      style={{
                        fontSize: "1.5rem",
                      }}
                    ></MdOutlineAlarmOff>
                    <Text>Smoke alarm</Text>
                  </Flex>
                </GridItem>
              </Grid>
              <Button
                margin="2rem 0 0 0"
                padding="1.5rem 1.7rem"
                colorScheme="transparent"
                color="black"
                fontWeight="600"
                border="1px solid black"
              >
                Show all 39 amenities
              </Button>
            </Box>

            {/* Divider  */}
            <Box margin="2.5rem 0" height="1px" background="lightGrey"></Box>

            {/* Select Check in Date */}
            <Box>
              <Text fontSize="1.5rem" fontWeight="550">
                Select check-in date
              </Text>
              <Text
                marginBottom="1rem"
                color="rgb(113, 113, 113)"
                fontSize="15px"
              >
                Add your travel dates for exact pricing
              </Text>
              <Flex margin="auto" gap="2rem">
                <Box
                  justifyContent="center"
                  width="340px"
                  // width="60%"
                  bgColor="white"
                  margin="auto"
                  borderRadius="10px"
                >
                  <Calendar
                    onDayClick={handleDayClick}
                    modifiers={modifiers}
                    locale={enGB}
                  />
                </Box>
                <Box
                  justifyContent="center"
                  // width="60%"
                  width="340px"
                  bgColor="white"
                  margin="auto"
                  borderRadius="10px"
                >
                  <Calendar
                    onDayClick={handleDayClick}
                    modifiers={modifiers}
                    locale={enGB}
                  />
                </Box>
              </Flex>
              <Flex
                justifyContent="space-between"
                alignItems="center"
                marginTop="1rem"
              >
                <Box
                  style={{
                    padding: ".7rem",
                    borderRadius: "100px",
                  }}
                  _hover={{
                    cursor: "pointer",
                    background: "#f7f7f7",
                  }}
                >
                  <BsKeyboard
                    style={{
                      fontSize: "1.7rem",
                      borderRadius: "100px",
                    }}
                  ></BsKeyboard>
                </Box>
                <Link
                  fontWeight="550"
                  textDecoration="underline"
                  padding=".2rem .5rem"
                  _hover={{
                    cursor: "pointer",
                    background: "#f7f7f7",
                  }}
                >
                  Clear dates
                </Link>
              </Flex>
            </Box>
          </GridItem>
          <GridItem colStart={5} colSpan={1}>
            <Box
              top="7rem"
              left="5rem"
              position="sticky"
              paddingBottom="1.5rem"
            >
              <Box
                minWidth="23rem"
                minHeight="18rem"
                border="1px solid lightGrey"
                padding="1.5rem"
                borderRadius="10px"
                shadow="lg"
              >
                <Flex justifyContent="space-between">
                  <Flex alignItems="center">
                    <BiRupee
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "550",
                      }}
                    ></BiRupee>
                    <Text
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "550",
                      }}
                    >
                      3,451
                    </Text>
                    <Text>
                      <span></span>/ night
                    </Text>
                  </Flex>
                  <Flex alignItems="center">
                    <AiTwotoneStar
                      style={{
                        color: "#ff385c",
                        fontSize: ".8rem",
                      }}
                    ></AiTwotoneStar>
                    <Text fontSize=".9rem">4.76</Text>
                    <Text
                      fontSize=".9rem"
                      fontWeight="600"
                      textDecoration="underline"
                    >
                      25 reviews
                    </Text>
                  </Flex>
                </Flex>
                <Grid
                  templateColumns="repeat(2,1fr)"
                  border="1px solid rgb(113, 113, 113)"
                  borderRadius="10px"
                  marginBottom="1rem"
                >
                  <GridItem colSpan={2} rowSpan={1}>
                    <Flex
                      border="2px solid"
                      padding=".5rem"
                      borderRadius="10px"
                      justifyContent="flex-start"
                    >
                      <Box>
                        <Text fontSize=".6rem" fontWeight="650">
                          CHECK-IN
                        </Text>
                        <Text fontSize="14px" color="rgb(113, 113, 113)">
                          Add date
                        </Text>
                      </Box>
                      <Box marginLeft="6rem">
                        <Text fontSize=".6rem" fontWeight="650">
                          CHECKOUT
                        </Text>
                        <Text fontSize="14px" color="rgb(113, 113, 113)">
                          Add date
                        </Text>
                      </Box>
                    </Flex>
                  </GridItem>
                  <GridItem colSpan={2} rowSpan={1}>
                    <Flex padding=".5rem" justifyContent="space-between">
                      <Box>
                        <Text fontSize=".6rem" fontWeight="650">
                          GUEST
                        </Text>
                        <Text fontSize="14px" color="rgb(113, 113, 113)">
                          1 guest
                        </Text>
                      </Box>
                      <Box></Box>
                    </Flex>
                  </GridItem>
                </Grid>
                <Button
                  width="100%"
                  height="3rem"
                  backgroundImage="var(--dls19-brand-gradient-radial, radial-gradient(circle at center, #FF385C 0%, #E61E4D 27.5%, #E31C5F 40%, #D70466 57.5%, #BD1E59 75%, #BD1E59 100% ))"
                >
                  Check availability
                </Button>
              </Box>
              <Flex
                justifyContent="center"
                alignItems="center"
                marginTop="1.5rem"
              >
                <AiFillFlag
                  style={{
                    marginRight: "1rem",
                    color: "grey",
                  }}
                ></AiFillFlag>
                <Text color="grey" textDecoration="underline" fontWeight="500">
                  Report this listing
                </Text>
              </Flex>
            </Box>
          </GridItem>
        </Grid>

        {/* Divider  */}
        <Box margin="2.5rem 0" height="1px" background="lightGrey"></Box>

        {/* review Tag Line */}
        <Flex alignItems="center">
          <AiTwotoneStar
            style={{
              fontSize: "1.3rem",
              color: "#FF385C",
              marginRight: ".5rem",
            }}
          ></AiTwotoneStar>
          <Text
            style={{
              fontSize: "1.3rem",
              fontWeight: "550",
            }}
          >
            4.70 . 214 reviews
          </Text>
        </Flex>

        {/* review Types */}

        <Box marginBottom="4rem">
          <Grid
            templateColumns="repeat(4,1fr)"
            templateRows="repeat(1,1fr)"
            columnGap="10"
            rowGap="3"
            marginTop="2rem"
            alignItems="center"
          >
            <GridItem colSpan="1">Cleanliness</GridItem>
            <GridItem colSpan="1">
              <Flex alignItems="center">
                <Box
                  width="8rem"
                  height="4px"
                  background="rgb(221, 221, 221)"
                  borderRadius="10px"
                >
                  <Box
                    width="7.7rem"
                    height="4px"
                    background="black"
                    borderRadius="10px"
                  ></Box>
                </Box>
                <span
                  style={{
                    marginLeft: ".7rem",
                    fontSize: ".8em",
                    fontWeight: "550",
                  }}
                >
                  4.7
                </span>
              </Flex>
            </GridItem>
            <GridItem colSpan="1">Accuracy</GridItem>
            <GridItem colSpan="1">
              <Flex alignItems="center">
                <Box
                  width="8rem"
                  height="4px"
                  background="rgb(221, 221, 221)"
                  borderRadius="10px"
                >
                  <Box
                    width="7.7rem"
                    height="4px"
                    background="black"
                    borderRadius="10px"
                  ></Box>
                </Box>
                <span
                  style={{
                    marginLeft: ".7rem",
                    fontSize: ".8em",
                    fontWeight: "550",
                  }}
                >
                  4.7
                </span>
              </Flex>
            </GridItem>
            <GridItem colSpan="1">Communication</GridItem>
            <GridItem colSpan="1">
              <Flex alignItems="center">
                <Box
                  width="8rem"
                  height="4px"
                  background="rgb(221, 221, 221)"
                  borderRadius="10px"
                >
                  <Box
                    width="7.7rem"
                    height="4px"
                    background="black"
                    borderRadius="10px"
                  ></Box>
                </Box>
                <span
                  style={{
                    marginLeft: ".7rem",
                    fontSize: ".8em",
                    fontWeight: "550",
                  }}
                >
                  4.7
                </span>
              </Flex>
            </GridItem>
            <GridItem colSpan="1">Location</GridItem>
            <GridItem colSpan="1">
              <Flex alignItems="center">
                <Box
                  width="8rem"
                  height="4px"
                  background="rgb(221, 221, 221)"
                  borderRadius="10px"
                >
                  <Box
                    width="7.7rem"
                    height="4px"
                    background="black"
                    borderRadius="10px"
                  ></Box>
                </Box>
                <span
                  style={{
                    marginLeft: ".7rem",
                    fontSize: ".8em",
                    fontWeight: "550",
                  }}
                >
                  4.7
                </span>
              </Flex>
            </GridItem>
            <GridItem colSpan="1">Check-in</GridItem>
            <GridItem colSpan="1">
              <Flex alignItems="center">
                <Box
                  width="8rem"
                  height="4px"
                  background="rgb(221, 221, 221)"
                  borderRadius="10px"
                >
                  <Box
                    width="7.7rem"
                    height="4px"
                    background="black"
                    borderRadius="10px"
                  ></Box>
                </Box>
                <span
                  style={{
                    marginLeft: ".7rem",
                    fontSize: ".8em",
                    fontWeight: "550",
                  }}
                >
                  4.7
                </span>
              </Flex>
            </GridItem>
            <GridItem colSpan="1">Value</GridItem>
            <GridItem colSpan="1">
              <Flex alignItems="center">
                <Box
                  width="8rem"
                  height="4px"
                  background="rgb(221, 221, 221)"
                  borderRadius="10px"
                >
                  <Box
                    width={(4.7 * 100) / 4}
                    height="4px"
                    background="black"
                    borderRadius="10px"
                  ></Box>
                </Box>
                <span
                  style={{
                    marginLeft: ".7rem",
                    fontSize: ".8em",
                    fontWeight: "550",
                  }}
                >
                  4.7
                </span>
              </Flex>
            </GridItem>
          </Grid>

          {/* Reviews */}
          <Grid
            templateColumns="repeat(2,1fr)"
            templateRows="repeat(3,1fr)"
            rowGap="12"
            columnGap="10"
            marginTop="2.5rem"
            marginBottom="3.5rem"
          >
            <GridItem>
              <Flex marginBottom="1rem">
                <Box width="3.5rem" height="3.5rem" borderRadius="100px">
                  <Image
                    width="100px"
                    height="100%"
                    borderRadius="full"
                    src="https://source.unsplash.com/1000x850/?humanface"
                  ></Image>
                </Box>
                <Box marginLeft="1rem">
                  <Text fontWeight="610">Samad</Text>
                  <Text color="#717171" fontSize=".9em">
                    March 2021
                  </Text>
                </Box>
              </Flex>
              <Box maxWidth="27rem" minHeight="40%">
                <Text
                  wordBreak="normal"
                  whiteSpace="nowrap"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  width="100%"
                  height="100%"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate illo esse eveniet est reiciendis a corrupti, alias
                  consequatur sequi, laboriosam molestias, veniam velit
                  laudantium voluptates illum itaque autem. Accusantium
                  reprehenderit neque earum! Neque eos blanditiis id hic quod,
                  magni tenetur quasi repellendus eum molestiae facere, commodi
                  nihil maiores labore ullam.
                </Text>
              </Box>
            </GridItem>
            <GridItem>
              <Flex marginBottom="1rem">
                <Box width="3.5rem" height="3.5rem" borderRadius="100px">
                  <Image
                    width="100px"
                    height="100%"
                    borderRadius="full"
                    src="https://source.unsplash.com/1000x850/?cartoon"
                  ></Image>
                </Box>
                <Box marginLeft="1rem">
                  <Text fontWeight="610">Samad</Text>
                  <Text color="#717171" fontSize=".9em">
                    March 2021
                  </Text>
                </Box>
              </Flex>
              <Box maxWidth="27rem" minHeight="40%">
                <Text
                  wordBreak="normal"
                  whiteSpace="nowrap"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  width="100%"
                  height="100%"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  ullam.
                </Text>
              </Box>
            </GridItem>
            <GridItem>
              <Flex marginBottom="1rem">
                <Box width="3.5rem" height="3.5rem" borderRadius="100px">
                  <Image
                    width="100px"
                    height="100%"
                    borderRadius="full"
                    src="https://source.unsplash.com/1000x850/?car"
                  ></Image>
                </Box>
                <Box marginLeft="1rem">
                  <Text fontWeight="610">Samad</Text>
                  <Text color="#717171" fontSize=".9em">
                    March 2021
                  </Text>
                </Box>
              </Flex>
              <Box maxWidth="27rem" minHeight="40%">
                <Text
                  wordBreak="normal"
                  whiteSpace="nowrap"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  width="100%"
                  height="100%"
                >
                  Lorem ipsum dolor sit amet ullam.
                </Text>
              </Box>
            </GridItem>
            <GridItem>
              <Flex marginBottom="1rem">
                <Box width="3.5rem" height="3.5rem" borderRadius="100px">
                  <Image
                    width="100px"
                    height="100%"
                    borderRadius="full"
                    src="https://source.unsplash.com/1000x850/?baby"
                  ></Image>
                </Box>
                <Box marginLeft="1rem">
                  <Text fontWeight="610">Samad</Text>
                  <Text color="#717171" fontSize=".9em">
                    March 2021
                  </Text>
                </Box>
              </Flex>
              <Box maxWidth="27rem" minHeight="40%">
                <Text
                  wordBreak="normal"
                  whiteSpace="nowrap"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  width="100%"
                  height="100%"
                >
                  Lorem ipsum dolor ullam.
                </Text>
              </Box>
            </GridItem>
            <GridItem>
              <Flex marginBottom="1rem">
                <Box width="3.5rem" height="3.5rem" borderRadius="100px">
                  <Image
                    width="100px"
                    height="100%"
                    borderRadius="full"
                    src="https://source.unsplash.com/1000x850/?moroccan girl"
                  ></Image>
                </Box>
                <Box marginLeft="1rem">
                  <Text fontWeight="610">Samad</Text>
                  <Text color="#717171" fontSize=".9em">
                    March 2021
                  </Text>
                </Box>
              </Flex>
              <Box maxWidth="27rem" minHeight="40%">
                <Text
                  wordBreak="normal"
                  whiteSpace="nowrap"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  width="100%"
                  height="100%"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate illo esse eveniet est reiciendis a corrupti, alias
                  consequatur sequi.
                </Text>
              </Box>
            </GridItem>
            <GridItem>
              <Flex marginBottom="1rem">
                <Box width="3.5rem" height="3.5rem" borderRadius="100px">
                  <Image
                    width="100px"
                    height="100%"
                    borderRadius="full"
                    src="https://source.unsplash.com/1000x850/?arabic girl"
                  ></Image>
                </Box>
                <Box marginLeft="1rem">
                  <Text fontWeight="610">Samad</Text>
                  <Text color="#717171" fontSize=".9em">
                    March 2021
                  </Text>
                </Box>
              </Flex>
              <Box maxWidth="27rem" minHeight="40%">
                <Text
                  wordBreak="normal"
                  whiteSpace="nowrap"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  width="100%"
                  height="100%"
                >
                  Lorem ipsum
                </Text>
              </Box>
            </GridItem>
          </Grid>
          <Link
            padding=".8rem 1.5rem"
            border="1px solid black"
            borderRadius="10px"
            fontSize="1em"
            fontWeight="600"
          >
            Show all 214 reviews
          </Link>
        </Box>

        {/* Divider  */}
        <Box margin="2.5rem 0" height="1px" background="lightGrey"></Box>

        {/* where youll be */}
        <Box>
          <Text fontSize="1.5em" fontWeight="550">
            Where you’ll be
          </Text>
          <Box
            marginTop="1.5rem"
            minWidth="100%"
            minHeight="30rem"
            border="2px solid red"
          ></Box>
        </Box>
      </Box>
    </Box>
  );
}
