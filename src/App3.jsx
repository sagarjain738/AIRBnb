import { Box, Flex, position } from "@chakra-ui/react";

export default function App() {
  return (
    <div
      style={{
        minheight: "100vh",
        position: "relative",
        display: "grid",
        gridTemplateColumns: "repeat(13,1fr)",
        gridTemplateRows: "reapeat(2,1fr)",
      }}
    >
      <div
        style={{
          gridColumnStart: "1",
          gridColumnEnd: "14",
          maxHeight: "10rem",
          background: "purple",
          position: "fixed",
          top: "0",
          left: "0",
        }}
      >
        <div style={{ height: "10rem" }}></div>
      </div>
      <div
        style={{
          background: "red",
          maxHeight: "32rem",
          gridColumnStart: "1",
          gridColumnEnd: "8",
        }}
      >
        <div style={{ height: "90rem" }}></div>
      </div>
      <div
        style={{
          gridColumnStart: "8",
          gridColumnEnd: "14",
          background: "yellow",
          position: "fixed",
          top: "0",
          right: "0",
          maxHeight: "32rem",
        }}
      ></div>
      <div
        style={{
          maxHeight: "15rem",
          background: "black",
          gridColumnStart: "1",
          gridColumnEnd: "14",
          position: "fixed",
          left: "0",
          top: "0",
        }}
      >
        <div style={{ height: "15rem" }}></div>
      </div>
    </div>
  );
}
