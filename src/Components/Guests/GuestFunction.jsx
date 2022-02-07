import {
  Box,
  useStyleConfig,
  Flex,
  Text,
  Button,
  Divider,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";

export default function GuestList(props) {
  const { variant, children, display, index, ...rest } = props;
  const styles = useStyleConfig("LocationBoxx", { variant });
  const [guestList, setGuestList] = useState({
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  });

  return (
    <Box
      display={display}
      __css={styles}
      {...rest}
      //   zIndex={index}
      transition="0.4s"
      right="15.7rem"
      top="9.8rem"
      minWidth="25rem"
      minHeight="10rem"
    >
      <Data />
      <Data2 />
      <Text fontSize="14.5px" color="gray" marginBottom="1.5rem">
        If you're lucky enough to have more than 2 pets<br></br>
        with you, be sure to let your host know.
      </Text>
    </Box>
  );
}

const Data = () => {
  return category.map((a) => {
    return (
      <Box padding="0 2rem 0 0" marginBottom="1rem">
        <Flex
          justifyContent="space-between"
          // padding="0 1rem 0 0"
          alignItems="center"
          marginBottom="1rem"
          maxHeight="2.5rem"
        >
          <Flex flexDirection="column" flexBasis="70%">
            <Text fontSize="1rem" fontWeight="600">
              {a.type}
            </Text>
            <Text color="grey" fontSize="14.5px">
              {a.condition}
            </Text>
          </Flex>
          <Flex
            justifyContent="space-between"
            textAlign="center"
            flexBasis="30%"
          >
            <Button
              size="sm"
              borderRadius="full"
              background="transparent"
              border="1px solid lightGrey"
            >
              -
            </Button>
            <Text lineHeight="8">0</Text>
            <Button
              size="sm"
              borderRadius="full"
              background="transparent"
              border="1px solid lightGrey"
            >
              +
            </Button>
          </Flex>
        </Flex>
        <Divider size="sm"></Divider>
      </Box>
    );
  });
};
const Data2 = () => {
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
          <Text>Pets</Text>
          <Link textDecor="underline">Bringing an assistance pets?</Link>
        </Flex>
        <Flex justifyContent="space-between" textAlign="center" flexBasis="30%">
          <Button
            size="sm"
            borderRadius="full"
            background="transparent"
            border="1px solid lightGrey"
            _hover={{}}
          >
            -
          </Button>
          <Text lineHeight="8">0</Text>
          <Button
            size="sm"
            borderRadius="full"
            background="transparent"
            border="1px solid lightGrey"
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
    type: "Adults",
    condition: "Ages 13 or above",
  },
  {
    type: "Children",
    condition: "Ages 2-12",
  },
  {
    type: "Infants",
    condition: "Under 2",
  },
  //   {
  //     type: "Pets",
  //     condition: "Bringing an assistance animal?",
  //   },
];
