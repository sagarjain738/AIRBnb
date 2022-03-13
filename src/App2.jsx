import Header from "./Components/Header2/Header";
import Buttons from "./Components/Header2/Buttons";
import { Divider } from "@chakra-ui/react";
import HotelResult from "./Components/HotelResults/HotelResult";
import { Box } from "@chakra-ui/react";
import Footer from "./Components/Footer/Footer";

export default function App() {
  return (
    <>
      <div>
        <Box
          position="fixed"
          width="100%"
          zIndex={10}
          bg="white"
          maxHeight="190vh"
        >
          <Header />
          <br></br>
          <Buttons />
        </Box>
        <Box height="100%">
          {/* <Box height="100%"> */}
          <HotelResult />
        </Box>
      </div>
      <Box>{/* <Footer /> */}</Box>
    </>
  );
}
