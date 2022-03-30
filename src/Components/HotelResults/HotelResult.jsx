import { Grid, Text, Box, GridItem, Flex, Divider } from "@chakra-ui/react";
import { useState, useEffect } from "react";
// import Maps from "../Map/Map";
import Map from "../MapBox/Map";
import Hotels from "../Hotels/Hotels";
import axios from "axios";
import { useParams } from "react-router";
import { addLang, addLat } from "../GlobalStatesRedux/action";
import { useSelector, useDispatch } from "react-redux";

export default function HotelResult() {
  const [cityDetails, setCityDetails] = useState([{}]);
  const [hotelDetails, setHotelDetails] = useState([]);
  const dispatch = useDispatch();

  const param = useParams();
  const getCityDetails = async () => {
    const result = await axios.get(
      `http://localhost:1111/cityDetails/${param.location}`
    );
  };
  const getHotelList = async () => {
    const result = await axios.get("http://localhost:1111/hotellist");
    setHotelDetails(result.data);
  };
  useEffect(() => {
    getCityDetails();
    getHotelList();
  }, []);

  return (
    <Box>
      <Flex>
        <Box
          width="58.5%"
          maxHeight="80vh"
          top="23%"
          left="0%"
          marginTop="9.2rem"
        >
          <Box>
            <Hotels
              cityDetails={cityDetails}
              hotelDetails={hotelDetails}
            ></Hotels>
          </Box>
        </Box>
        <Box position="fixed" flexBasis="42%" top="23%" right="0">
          <Map />
        </Box>
      </Flex>
    </Box>
  );
}
