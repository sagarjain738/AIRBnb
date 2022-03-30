import Header from "./Components/Header2/Header";
import Buttons from "./Components/Header2/Buttons";
import HotelResult from "./Components/HotelResults/HotelResult";
import SearchBar from "./Components/Search/SearchBar";
import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
export default function App2() {
  const {
    isOpen: isOpenHeader,
    onOpen: onOpenHeader,
    onClose: onCloseHeader,
  } = useDisclosure();
  const {
    isOpen: isOpenSearchBar,
    onOpen: onOpenSearchBar,
    onClose: onCloseSearchBar,
  } = useDisclosure();

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
          {/* <SearchBar /> */}
          <br></br>
          <Buttons />
        </Box>
        <Box height="100%">
          {/* <Box height="100%"> */}
          <HotelResult />
        </Box>
      </div>
    </>
  );
}
