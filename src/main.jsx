import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import App from "./App2";
// import App from "./App3";
import Maps from "./Components/Map/Map";
import theme from "./Components/Theme/Theme";
import { ChakraProvider } from "@chakra-ui/react";
// import HotelFilter from "./Components/Filters/HotelFilters2";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
