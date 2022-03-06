import { Button, Center, Divider, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { CgOptions } from "react-icons/cg";
import CostSelection from "../CostSelection/CostSelection";
import HotelFilters from "../Filters/HotelFilters";

export default function Buttons() {
  const [show, setShow] = useState({
    index: -1,
    display: "none",
  });

  const [arrow, setArrow] = useState("down");

  return (
    <Flex
      style={{
        alignItems: "center",
        justifyContent: "space-evenly",
        maxWidth: "1325px",
        margin: "auto",
        marginTop: ".3rem",
        position: "relative",
      }}
    >
      <CostSelection display={show.display} index={show.index}></CostSelection>
      <HotelFilters />
      <Button
        style={{
          background: "transparent",
          border: ".5px solid lightGrey",
          borderRadius: "40px",
          fontWeight: "500",
          fontSize: "14.5px",
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
          fontSize: "14.5px",
        }}
        _hover={{ borderColor: "black" }}
      >
        Type of place
        <BiChevronDown fontSize="1.5rem"></BiChevronDown>
      </Button>
      <Center margin="0 5px" height="25px">
        <Divider orientation="vertical"></Divider>
      </Center>
      <Button variant="airBNB" _hover={{ borderColor: "black" }}>
        Beachfront
      </Button>
      <Button variant="airBNB" _hover={{ borderColor: "black" }}>
        Pool
      </Button>
      <Button variant="airBNB" _hover={{ borderColor: "black" }}>
        Wifi
      </Button>
      <Button variant="airBNB" _hover={{ borderColor: "black" }}>
        Air conditioning
      </Button>
      <Button variant="airBNB" _hover={{ borderColor: "black" }}>
        Kitchen
      </Button>
      <Button variant="airBNB" _hover={{ borderColor: "black" }}>
        Free parking
      </Button>
      <Button variant="airBNB" _hover={{ borderColor: "black" }}>
        Washing machine
      </Button>
      <Button
        style={{
          background: "transparent",
          border: ".5px solid lightGrey",
          borderRadius: "40px",
          fontWeight: "500",
          fontSize: "14.5px",
        }}
        _hover={{ border: ".5px solid black" }}
      >
        <CgOptions fontWeight="bold"></CgOptions>
        Filters
      </Button>
    </Flex>
  );
}

// size="airBNB" not working
