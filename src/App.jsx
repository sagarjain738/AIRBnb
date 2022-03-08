import logo from "./logo.svg";
import "./App.css";
import Head from "./Components/Header/HeaderContainer";
import Container from "./Components/Header/Container";
import SearchBar from "./Components/Search/SearchBar";
import PictureHolder from "./Components/PictureHolder/PictureHolder";
import DatePicker from "./Components/Calender/TripCalender2";
import { useState } from "react";
import Card from "./Components/Cards/CardsFunction";
import { Flex, Text, Link } from "@chakra-ui/react";
import TaglineFirst from "./Components/TagLine/FirstTagLine";
import Container2 from "./Components/Header/Container2";
import LocationBox from "./Components/Search/LocationBoxFunction";
import GuestList from "./Components/Guests/GuestFunction";
import PictureGrid from "./Components/PictureHolder/PictureGrid";
import SearchSuggestion from "./Components/Search/SearchSuggestions";
import axios from "axios";
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

  const [loc, setLoc] = useState([]);

  const [showLocations, setShowLocations] = useState({
    index: -4,
    display: "none",
  });

  const getLocations = async (a) => {
    const result = await axios.get(`http://localhost:1111/cityName/${a}`);
    setLoc(result.data);
    setPositionTwo({
      index: -1,
      display: "none",
    });

    setShowLocations({
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
          getLocations={(query, value) => getLocations(query, value)}
        ></SearchBar>
        <PictureHolder />
        <LocationBox
          index={positionTwo.index}
          display={positionTwo.display}
        ></LocationBox>
        <GuestList
          index={positionGuest.index}
          display={positionGuest.display}
        ></GuestList>
        <SearchSuggestion
          data={loc}
          index={showLocations.index}
          display={showLocations.display}
        />
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

// react-router-dom

// https://reqres.in/
