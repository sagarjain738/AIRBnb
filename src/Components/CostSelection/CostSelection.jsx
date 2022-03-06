import {
  Flex,
  Box,
  Text,
  useStyleConfig,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Button,
  Divider,
  Input,
  Link,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { BiMinus } from "react-icons/bi";

export default function CostSelection(props) {
  const { variant, children, display, index, ...rest } = props;
  const styles = useStyleConfig("LocationBoxx", { variant });

  return (
    <Box display={display} zIndex={index}>
      <Box
        __css={styles}
        style={{
          maxWidth: "32.5%",
          height: "20.5rem",
          display: { display },
          position: "absolute",
          left: ".2rem",
          top: "3rem",
          borderRadius: "10px",
          padding: "0 0 0 0",
          border: "1px solid lightGrey",
        }}
        shadow="2xl"
      >
        <Text
          lineHeight="2rem"
          fontSize="1rem"
          fontWeight="400"
          paddingLeft="1.2rem"
          paddingTop="1.2rem"
        >
          {" "}
          The average nightly price is ₹4,696
        </Text>
        <Box>
          <SliderThumbWithTooltip></SliderThumbWithTooltip>
        </Box>
      </Box>
    </Box>
  );
}

function SliderThumbWithTooltip() {
  const [sliderValue, setSliderValue] = React.useState(850);
  const [secondSliderValue, setsecondSliderValue] = React.useState(100000);
  const [linkValues, setLinkValues] = React.useState({
    color: "lightGrey",
    cursor: "not-allowed",
  });

  useEffect(() => {
    if (sliderValue > 850) {
      setLinkValues({ color: "black", cursor: "pointer" });
    } else {
      setLinkValues({ color: "lightGrey", cursor: "not-allowed" });
    }
  }, [sliderValue]);

  return (
    <Box width="100%">
      <Box padding="1rem 0" maxWidth="85%" margin="auto">
        <Slider
          id="slider"
          defaultValue={855}
          min={850}
          max={100000}
          colorScheme="teal"
          value={sliderValue}
          onChange={(v) => setSliderValue(v)}
          focusThumbOnChange={false}
          marginTop={"6.4rem"}
        >
          <SliderTrack background={"grey"} height="2px">
            <SliderFilledTrack background="lightgray" />
          </SliderTrack>

          <SliderThumb
            _hover={{ cursor: "pointer" }}
            borderColor="grey"
            boxSize={7}
            alignItems="center"
          >
            <Divider
              orientation="vertical"
              height="10px"
              marginRight="2px"
            ></Divider>
            <Divider
              orientation="vertical"
              height="10px"
              marginRight="2px"
            ></Divider>
            <Divider
              orientation="vertical"
              height="10px"
              marginRight="2px"
            ></Divider>
          </SliderThumb>
        </Slider>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          marginTop="1rem"
        >
          <Box
            style={{
              border: "1px solid lightGrey",
              padding: ".4rem .5rem",
              borderRadius: "7px",
              textAlign: "left",
            }}
            width="44%"
          >
            <Text fontSize=".75rem" textColor="grey">
              min price
            </Text>
            <span>₹</span>{" "}
            <Input
              type="number"
              margin="0"
              width="70%"
              border="none"
              variant="unstyled"
              value={sliderValue}
              onChange={(a) => setSliderValue(a.target.value)}
            ></Input>
          </Box>
          <BiMinus color="black"></BiMinus>
          <Box
            style={{
              border: "1px solid lightGrey",
              padding: ".4rem .5rem",
              borderRadius: "7px",
              textAlign: "left",
            }}
            width="44%"
          >
            <Text fontSize=".75rem" textColor="grey">
              max price
            </Text>
            <span>₹</span>{" "}
            <Input
              type="number"
              margin="0"
              width="80%"
              border="none"
              variant="unstyled"
              value={secondSliderValue}
              onChange={(a) => setsecondSliderValue(a.target.value)}
            ></Input>
          </Box>
        </Flex>
      </Box>
      <Divider width="100%" color="purple"></Divider>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        padding="9px 1rem"
      >
        <Link
          color={linkValues.color}
          textDecoration="underline"
          fontWeight="600"
          cursor={linkValues.cursor}
          onClick={() => {
            setSliderValue(850);
            setsecondSliderValue(100000);
          }}
        >
          Clear
        </Link>
        <Button
          background="blackAlpha.900"
          variant="ghost"
          color="white"
          padding="0 1rem"
          outline="transparent"
          _hover={{ background: "black" }}
          onClick={() => {}}
        >
          Save
        </Button>
      </Flex>
    </Box>
  );
}
