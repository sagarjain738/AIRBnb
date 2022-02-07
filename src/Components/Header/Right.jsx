import { Box, Flex, Link } from "@chakra-ui/react";
import { CgGlobeAlt } from "react-icons/cg";
import { AiOutlineMenu } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { MdMenu } from "react-icons/md";

//

export default function Right() {
  return (
    <Flex
      justifyContent="space-around"
      alignItems="center"
      flexBasis="22%"
      textAlign="center"
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Link
          color="white"
          href="#"
          textDecor="none"
          fontSize="15px"
          padding="1rem .8rem"
          lineHeight="10px"
          fontWeight="600"
          borderRadius="30px"
          _hover={{ bg: "grey" }}
        >
          Become a host
        </Link>
      </Flex>

      <Flex
        alignItems="center"
        // background="red"
        justifyContent="center"
        borderRadius="100px"
        marginLeft="-10px"
        width="2rem"
        height="2rem"
        _hover={{ bg: "grey", cursor: "pointer" }}
      >
        <CgGlobeAlt fontSize="1.3rem"></CgGlobeAlt>
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="space-evenly"
        borderRadius="50px"
        background="white"
        height="2.6rem"
        width="4.8rem"
        color="black"
        _hover={{ cursor: "pointer" }}
      >
        <MdMenu fontSize="1.2rem"></MdMenu>
        <FaUserCircle color="grey" fontSize="1.9rem"></FaUserCircle>
      </Flex>
    </Flex>
  );
}
