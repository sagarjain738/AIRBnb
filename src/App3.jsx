import App from "./App";
import App2 from "./App2";
import { Link, Routes, Route } from "react-router-dom";
import HotelApp from "./App4";

export default function MainApp() {
  return (
    <Routes>
      <Route path="/" element={<App></App>}></Route>
      <Route path="/hotelinfo/:location" element={<App2></App2>}></Route>
      <Route
        path="/hotelinfo/:location/:hotelId"
        element={<HotelApp></HotelApp>}
      ></Route>
      {/* <Route path="/hotelinfo/:location" element={<App2></App2>}></Route> */}
    </Routes>
  );
}
