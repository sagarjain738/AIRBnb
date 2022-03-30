import logo from "./logo.svg";
import "./App.css";
import Head from "./Components/Header/HeaderContainer";
import Container from "./Components/Header/Container";
import SearchBar from "./Components/Search/SearchBar";
import PictureHolder from "./Components/PictureHolder/PictureHolder";
import DatePicker from "./Components/Calender/TripCalender2";
import { useState } from "react";
import Card from "./Components/Cards/CardsFunction";
import { Flex, Text } from "@chakra-ui/react";
import TaglineFirst from "./Components/TagLine/FirstTagLine";
import Container2 from "./Components/Header/Container2";
import LocationBox from "./Components/Search/LocationBoxFunction";
import GuestList from "./Components/Guests/GuestFunction";
import PictureGrid from "./Components/PictureHolder/PictureGrid";
import SearchSuggestion from "./Components/Search/SearchSuggestions";
import axios from "axios";
import Footer from "./Components/Footer/Footer2";
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
} from "@chakra-ui/react";

function App() {
  const [loc, setLoc] = useState([]);
  const [showloc, setShowLoc] = useState(true);
  const [showSuggestion, setShowSuggestion] = useState(true);

  const getLocations = async (a) => {
    const result = await axios.get(`http://localhost:1111/cityName/${a}`);
    setLoc(result.data);
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenSearchSuggestion,
    onOpen: onOpenSearchSuggestion,
    onClose: onCloseSearchSuggestion,
  } = useDisclosure();
  const {
    isOpen: isOpenCalender,
    onOpen: onOpenCalender,
    onClose: onCloseCalender,
  } = useDisclosure();
  const {
    isOpen: isOpenLocationBox,
    onOpen: onOpenLocationBox,
    onClose: onCloseLocationBox,
  } = useDisclosure();

  return (
    <>
      <Container>
        {/* Calender */}
        <Modal
          isOpen={isOpenCalender}
          onClose={onCloseCalender}
          onopen={onOpenCalender}
        >
          <ModalOverlay>
            <ModalContent>
              <DatePicker />
            </ModalContent>
          </ModalOverlay>
        </Modal>
        <Head></Head>

        {/* Search Bar */}
        <SearchBar
          styleColor="white"
          getLocations={(query) => getLocations(query)}
          onOpen={onOpen}
          onOpenCalender={onOpenCalender}
          onOpenSearchSuggestion={onOpenSearchSuggestion}
          onOpenLocationBox={onOpenLocationBox}
          setShowLoc={setShowLoc}
          setShowSuggestion={setShowSuggestion}
          isOpenLocationBox={isOpenLocationBox}
        ></SearchBar>

        <PictureHolder />

        {/* Location Box */}
        <Modal
          isOpen={showloc === true ? isOpenLocationBox : showloc}
          onOpen={onOpenLocationBox}
          onClose={onCloseLocationBox}
          trapFocus={false}
        >
          <ModalOverlay bg="none">
            <ModalContent>
              <LocationBox></LocationBox>
            </ModalContent>
          </ModalOverlay>
        </Modal>

        {/* Guest list */}
        <Modal isOpen={isOpen} onClose={onClose} onOpen={onOpen}>
          <ModalOverlay bg="none">
            <ModalContent>
              <GuestList></GuestList>
            </ModalContent>
          </ModalOverlay>
        </Modal>

        {/* Search Suggestion */}

        <Modal
          isOpen={
            // setShowSuggestion === true
            isOpenSearchSuggestion
            // : setShowSuggestion
          }
          onOpen={onOpenSearchSuggestion}
          onClose={onCloseSearchSuggestion}
          trapFocus={false}
          useInert={false}
        >
          <ModalOverlay background="none">
            <ModalContent>
              <SearchSuggestion data={loc}></SearchSuggestion>
            </ModalContent>
          </ModalOverlay>
        </Modal>
      </Container>

      {/* Container 2 */}

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
        <Footer />
      </Container2>
    </>
  );
}

export default App;

// react-router-dom
// https://reqres.in/

// https://kiarash-z.github.io/react-modern-calendar-datepicker/
// https://reactnicedates.hernansartorio.com/

// http://engine.hotellook.com/api/v2/lookup.json?query=moscow&lang=ru&lookFor=both&limit=1&token=PasteYourTokenHere

// https://airbnb.io/visx/gallery
// https://www.chartjs.org/
// chlakra modal
