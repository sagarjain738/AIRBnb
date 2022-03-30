import {
  Box,
  useStyleConfig,
  Flex,
  Text,
  Button,
  Divider,
  Link,
} from "@chakra-ui/react";

import {
  addAdults,
  addChildren,
  addPets,
  addInfants,
} from "../GlobalStatesRedux/action";

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

export default function GuestList(props) {
  const { variant, children, ...rest } = props;
  const styles = useStyleConfig("LocationBoxx", { variant });
  const { adults, childrens, pets, infants } = useSelector((store) => store);

  const [guestList, setGuestList] = useState({
    adults: adults,
    childrens: childrens,
    infants: infants,
    pets: pets,
  });

  useEffect(() => {
    setGuestList({
      adults: adults,
      childrens: childrens,
      infants: infants,
      pets: pets,
    });
    console.log("This is the persons list", adults, childrens, pets, infants);
  }, [adults, childrens, pets, infants]);

  const [textMessge, setTextMessge] = useState("");

  // const insertData = (type, value) => {
  //   if (guestList[type] === 0 && value === -1) {
  //     return;
  //   } else {
  //     setGuestList({ ...guestList, [type]: guestList[type] + value });
  //     if ([type] === "adults" || [type] === "children") {
  //       const tp = guestList[type];
  //       const gue = "guest";
  //       setTextMessge(tp + gue);
  //     }
  //   }
  // };

  return (
    <>
      <Box
        __css={styles}
        {...rest}
        transition="0.4s"
        left="15rem"
        top="6rem"
        minWidth="25rem"
        minHeight="10rem"
      >
        <Data guestList={guestList} textMessge={textMessge} />
        <Data2 guestList={guestList} />
        <Text fontSize="14.5px" color="gray">
          If you're lucky enough to have more than 2 pets<br></br>
          with you, be sure to let your host know.
        </Text>
      </Box>
    </>
  );
}

const Data = ({ guestList, textMessge }) => {
  const { adults, childrens, pets, infants } = useSelector((store) => store);
  const dispatch = useDispatch();
  return category.map((a, b) => {
    return (
      <Box key={b} padding="0 2rem 0 0" marginBottom="1rem">
        <Flex
          justifyContent="space-between"
          // padding="0 1rem 0 0"
          alignItems="center"
          marginBottom="1rem"
          maxHeight="2.5rem"
          key={b + 1}
        >
          <Flex flexDirection="column" flexBasis="70%" key={b + 2}>
            <Text
              fontSize="1rem"
              fontWeight="600"
              textTransform="capitalize"
              key={b + 3}
            >
              {a.type} {textMessge}
            </Text>
            <Text key={b + 4} color="grey" fontSize="14.5px">
              {a.condition}
            </Text>
          </Flex>
          <Flex
            justifyContent="space-between"
            textAlign="center"
            flexBasis="30%"
            key={b + 5}
          >
            <Button
              key={b + 6}
              size="sm"
              borderRadius="full"
              background="transparent"
              border="1px solid lightGrey"
              _hover={
                guestList[a.type] === 0
                  ? { cursor: "not-allowed", isActive: "false" }
                  : {
                      cursor: "pointer",
                      border: "1px solid grey",
                      background: "transparent",
                    }
              }
              onClick={() => {
                switch (a.type) {
                  case "adults":
                    adults === 0
                      ? dispatch(addAdults(0))
                      : dispatch(addAdults(-1));
                    break;
                  case "childrens":
                    childrens === 0
                      ? dispatch(addChildren(0))
                      : dispatch(addChildren(-1));
                    break;
                  case "infants":
                    infants === 0
                      ? dispatch(addInfants(0))
                      : dispatch(addInfants(-1));
                  default:
                    return;
                }
              }}
            >
              -
            </Button>
            <Text key={b + 7} lineHeight="8">
              {guestList[a.type]}
            </Text>
            <Button
              key={b + 8}
              size="sm"
              borderRadius="full"
              background="transparent"
              border="1px solid lightGrey"
              _hover={{ border: "1px solid grey", background: "transparent" }}
              onClick={() => {
                switch (a.type) {
                  case "adults":
                    adults === 16
                      ? dispatch(addAdults(0))
                      : dispatch(addAdults(1));
                    break;
                  case "childrens":
                    childrens === 15
                      ? dispatch(addChildren(0))
                      : dispatch(addChildren(1));
                    break;
                  case "infants":
                    infants === 5
                      ? dispatch(addInfants(0))
                      : dispatch(addInfants(1));
                  default:
                    return;
                }
              }}
            >
              +
            </Button>
          </Flex>
        </Flex>
        <Divider key={b + 9} size="sm"></Divider>
      </Box>
    );
  });
};
const Data2 = ({ guestList }) => {
  const { pets } = useSelector((store) => store);
  const dispatch = useDispatch();

  return (
    <Box paddingRight="2rem" marginBottom="1rem">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        maxHeight="2.5rem"
      >
        <Flex
          flexDirection="column"
          justifyContent="space-around"
          marginBottom="1rem"
          flexBasis="70%"
        >
          <Text fontWeight="600">Pets</Text>
          <Link textDecor="underline">Bringing an assistance pets?</Link>
        </Flex>
        <Flex justifyContent="space-between" textAlign="center" flexBasis="30%">
          <Button
            size="sm"
            borderRadius="full"
            background="transparent"
            border="1px solid lightGrey"
            _hover={
              guestList.pets === 0
                ? { cursor: "not-allowed", isActive: "false" }
                : {
                    cursor: "pointer",
                    border: "1px solid grey",
                    background: "transparent",
                  }
            }
            onClick={() => {
              pets === 0 ? dispatch(addPets(0)) : dispatch(addPets(-1));
            }}
          >
            -
          </Button>
          <Text lineHeight="8">{guestList.pets}</Text>
          <Button
            size="sm"
            borderRadius="full"
            background="transparent"
            border="1px solid lightGrey"
            _hover={
              guestList.pets === 5
                ? { cursor: "not-allowed", isActive: "false" }
                : {
                    cursor: "pointer",
                    border: "1px solid grey",
                    background: "transparent",
                  }
            }
            onClick={() => {
              pets === 5 ? dispatch(addPets(0)) : dispatch(addPets(1));
            }}
          >
            +
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};
const category = [
  {
    type: "adults",
    condition: "Ages 13 or above",
  },
  {
    type: "childrens",
    condition: "Ages 2-12",
  },
  {
    type: "infants",
    condition: "Under 2",
  },
  //   {
  //     type: "Pets",
  //     condition: "Bringing an assistance animal?",
  //   },
];
