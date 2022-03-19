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

import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { CgOptions } from "react-icons/cg";
import CostSelection from "../CostSelection/CostSelection";
import HotelFilters from "../Filters/HotelFilters";

export default function Buttons() {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const [show, setShow] = useState({
    index: -1,
    display: "none",
  });
  const [arrow, setArrow] = useState("down");

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
        }}
      >
        {/* <Modal onOpen={onOpen} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay>
            <ModalContent>
              <CostSelection
                display={show.display}
                index={show.index}
              ></CostSelection>
            </ModalContent>
          </ModalOverlay>
        </Modal> */}
        <CostSelection
          display={show.display}
          index={show.index}
        ></CostSelection>

        {/* <HotelFilters index={close.index} display={close.display} /> */}

        <ModalWork onOpen={onOpen} isOpen={isOpen} onClose={onClose} />
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
            setShow((a) => {
              if (a.display === "none" && a.index === -1) {
                setArrow("up");
                return { index: 1, display: "" };
              } else {
                setArrow("down");
                return { index: -1, display: "none" };
              }
            });
          }}
        >
          Price
          {arrow === "down" ? (
            <BiChevronDown fontSize="1.5rem"></BiChevronDown>
          ) : (
            <BiChevronUp fontSize="1.5rem"></BiChevronUp>
          )}
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
  const { isOpen, onClose } = props;

  return (
    <Box>
      <Modal isOpen={isOpen} size="3xl" onClose={onClose}>
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
