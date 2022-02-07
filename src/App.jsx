import logo from "./logo.svg";
import "./App.css";
import Head from "./Components/Header/HeaderContainer";
import Container from "./Components/Header/Container";
import SearchBar from "./Components/Search/SearchBar";
import PictureHolder from "./Components/PictureHolder/PictureHolder";
import DatePicker from "./Components/Calender/TripCalender2";
import { useState } from "react";
import Card from "./Components/Cards/CardsFunction";
import { Box, Flex, Text, Link } from "@chakra-ui/react";
import TaglineFirst from "./Components/TagLine/FirstTagLine";
import Container2 from "./Components/Header/Container2";
import LocationBox from "./Components/Search/LocationBoxFunction";
import { FaGreaterThan } from "react-icons/fa";
import { BiHomeCircle } from "react-icons/bi";
import { RiSailboatLine } from "react-icons/ri";
import { GiFishingBoat } from "react-icons/gi";
import GuestList from "./Components/Guests/GuestFunction";
import PictureGrid from "./Components/PictureHolder/PictureGrid";

function App() {
  const [position, setPosition] = useState({
    index: -2,
    display: "none",
  });
  const [positionTwo, setPositionTwo] = useState({
    index: -1,
    display: "none",
  });
  const [positionGuest, setPositionGuest] = useState({
    index: -3,
    display: "none",
  });
  const AdjustCalender = (newIndex) => {
    setPosition({
      index: newIndex,
      display: "",
    });
    setPositionTwo({
      index: -1,
      display: "none",
    });
    setPositionGuest({
      index: -2,
      display: "none",
    });
  };
  const AdjustSearch = (newIndex) => {
    setPosition({
      index: -2,
      display: "none",
    });
    setPositionTwo({
      index: newIndex,
      display: "",
    });
    setPositionGuest({
      index: -1,
      display: "none",
    });
  };
  const adjustGuest = (newIndex) => {
    setPosition({
      index: -2,
      display: "none",
    });
    setPositionTwo({
      index: newIndex,
      display: "none",
    });
    setPositionGuest({
      index: 1,
      display: "",
    });
  };

  return (
    <>
      <Container>
        <DatePicker index={position.index} display={position.display} />
        <Head></Head>
        <SearchBar
          styleColor="white"
          calender={(index) => AdjustCalender(index)}
          searchBar={(index) => AdjustSearch(index)}
          guestList={(index) => adjustGuest(index)}
        ></SearchBar>
        <PictureHolder />
        <LocationBox index={positionTwo.index} display={positionTwo.display}>
          <Text
            fontSize=".75rem"
            letterSpacing=".2px"
            fontWeight="bold"
            color="rgb(34, 34, 34)"
          >
            GO ANYWHERE, ANYTIME
          </Text>
          <Flex
            shadow="2xl"
            borderRadius="30px"
            marginTop="1rem"
            width="92%"
            height="3.7rem"
            border=".1px solid #DDDDDD"
            justifyContent="space-between"
            alignItems="center"
            padding="0 1rem"
          >
            <Link
              color="rgb(111, 1, 156)"
              fontWeight="bold"
              fontSize="1.2rem"
              _hover={{ textDecoration: "none" }}
            >
              I'm flexible
            </Link>
          </Flex>
        </LocationBox>
        <GuestList
          index={positionGuest.index}
          display={positionGuest.display}
        ></GuestList>
      </Container>
      <Container2>
        <TaglineFirst></TaglineFirst>
        <Flex justifyContent="space-between" maxWidth="1200px" margin="auto">
          <Card
            one="src\Components\Asset\one.jpg"
            color="#bc1a6e"
            city="Calangute"
            distance="1,495 kilometres away"
          ></Card>
          <Card
            one="src\Components\Asset\two.jpg"
            color="#de3151"
            city="Shimla"
            distance="279 kilometres away"
          ></Card>
          <Card
            one="src\Components\Asset\three.jpg"
            color="#cc2d4a"
            city="Musoorie"
            distance="223 kilometres away"
          ></Card>
          <Card
            one="src\Components\Asset\four.jpg"
            color="#d93b30"
            city="Manali"
            distance="405 kilometres away"
          ></Card>
        </Flex>
        <Text margin="5rem 5rem 3rem 5rem" fontSize="2.2rem" fontWeight="600">
          Discover Airbnb Experiences
        </Text>

        <PictureGrid></PictureGrid>
      </Container2>
    </>
  );
}

export default App;
