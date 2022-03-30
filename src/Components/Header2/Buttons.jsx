import {
  Button,
  Center,
  Divider,
  Flex,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  Box,
} from "@chakra-ui/react";
import { useEffect } from "react";

import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { CgOptions } from "react-icons/cg";
import CostSelection from "../CostSelection/CostSelection";
import HotelFilters from "../Filters/HotelFilters";

export default function Buttons() {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const {
    onOpen: openPrice,
    isOpen: isOpenPrice,
    onClose: onClosePrice,
  } = useDisclosure();
  return (
    <Box>
      <Flex
        style={{
          alignItems: "center",
          maxWidth: "98%",
          margin: ".3rem auto auto auto",
          // position: "relative",
          justifyContent: "space-around",
          paddingRight: ".5%",
          overflow: "unset",
        }}
      >
        <ModalWork onOpen={onOpen} isOpen={isOpen} onClose={onClose} />
        <ModalPrice
          openPrice={openPrice}
          isOpenPrice={isOpenPrice}
          onClosePrice={onClosePrice}
        ></ModalPrice>
        <Button
          style={{
            background: "transparent",
            border: ".5px solid lightGrey",
            borderRadius: "40px",
            fontWeight: "500",
            fontSize: "13.5px",
            transition: ".2s",
          }}
          _hover={{ borderColor: "black" }}
          onClick={() => {
            openPrice();
          }}
        >
          Price <BiChevronDown fontSize="1.5rem"></BiChevronDown>
        </Button>
        <Button
          style={{
            background: "transparent",
            border: ".5px solid lightGrey",
            borderRadius: "40px",
            fontWeight: "500",
            // fontSize: "13.5px",
          }}
          _hover={{ borderColor: "black" }}
        >
          Type of place
          <BiChevronDown fontSize="1.5rem"></BiChevronDown>
        </Button>
        <Center margin="0 5px" height="25px">
          <Divider orientation="vertical"></Divider>
        </Center>
        <Button
          fontSize="14.5px"
          variant="airBNB"
          _hover={{ borderColor: "black" }}
        >
          Free cancellation
        </Button>
        <Button
          variant="airBNB"
          fontSize="14.5px"
          _hover={{ borderColor: "black" }}
        >
          Beachfront
        </Button>
        <Button
          variant="airBNB"
          fontSize="14.5px"
          _hover={{ borderColor: "black" }}
        >
          Pool
        </Button>
        <Button
          variant="airBNB"
          fontSize="14.5px"
          _hover={{ borderColor: "black" }}
        >
          Wifi
        </Button>
        <Button
          variant="airBNB"
          fontSize="14.5px"
          _hover={{ borderColor: "black" }}
        >
          Air conditioning
        </Button>
        <Button
          variant="airBNB"
          fontSize="14.5px"
          _hover={{ borderColor: "black" }}
        >
          Kitchen
        </Button>
        <Button
          variant="airBNB"
          fontSize="14.5px"
          _hover={{ borderColor: "black" }}
        >
          Free parking
        </Button>
        <Button
          variant="airBNB"
          fontSize="14.5px"
          _hover={{ borderColor: "black" }}
        >
          Washing machine
        </Button>
        <Button
          style={{
            background: "transparent",
            border: ".5px solid lightGrey",
            borderRadius: "40px",
            fontWeight: "500",
            fontSize: "14.5px",
            outlineColor: "transparent",
          }}
          outline="none"
          _hover={{ border: ".5px solid black" }}
          onClick={() => {
            onOpen();
          }}
        >
          <CgOptions style={{ fontWeight: "600" }}></CgOptions>
          Filters
        </Button>
      </Flex>
      <Divider marginTop={"1rem"}></Divider>
    </Box>
  );
}

function ModalWork(props) {
  const { isOpen, onOpen, onClose } = props;

  return (
    <Box>
      <Modal onOpen={onOpen} isOpen={isOpen} size="3xl" onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          {/* <ModalCloseButton /> */}
          {/* <ModalHeader>Heading</ModalHeader> */}
          {/* <ModalBody> */}
          <HotelFilters onClose={onClose} />
          {/* </ModalBody> */}
          {/* <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </Box>
  );
}

function ModalPrice(props) {
  const { openPrice, isOpenPrice, onClosePrice } = props;
  return (
    <Modal
      onOpen={openPrice}
      isOpen={isOpenPrice}
      size="lg"
      onClose={onClosePrice}
    >
      <ModalOverlay background="none">
        <ModalContent>
          <CostSelection></CostSelection>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
}
