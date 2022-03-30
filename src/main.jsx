import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
// import App from "./App2";
import MainApp from "./App3";
import Maps from "./Components/Map/Map";
import theme from "./Components/Theme/Theme";
import { ChakraProvider } from "@chakra-ui/react";
// import HotelFilter from "./Components/Filters/HotelFilters2";

import { Provider } from "react-redux";
import store from "./Components/GlobalStatesRedux/store";
import { BrowserRouter } from "react-router-dom";
import "./swiper.css";

ReactDOM.render(
  <React.StrictMode>
    {/* redux store provider */}
    <ChakraProvider theme={theme}>
      {/* redux store provider */}
      <BrowserRouter>
        <Provider store={store}>
          <MainApp />
        </Provider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
