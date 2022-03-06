import Header from "./Components/Header2/Header";
import Buttons from "./Components/Header2/Buttons";
import { Divider } from "@chakra-ui/react";

export default function App() {
  return (
    <div>
      <Header />
      <br></br>
      <Buttons />
      <Divider marginTop={"1rem"}></Divider>
    </div>
  );
}
