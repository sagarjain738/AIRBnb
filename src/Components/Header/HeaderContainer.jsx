import { Button, Flex, Spacer } from "@chakra-ui/react";
import "@fontsource/roboto-mono";
import Left from "./Left";
import Center from "./Centered";
import Right from "./Right";

export default function Head({ children }) {
  return (
    <Flex
      justifyContent="space-between"
      height="8%"
      maxW="90%"
      m="auto"
      bg="black"
      color="white"
      // padding="1.5rem 0"
    >
      <Left></Left>
      <Center></Center>
      <Right></Right>
    </Flex>
  );
}
