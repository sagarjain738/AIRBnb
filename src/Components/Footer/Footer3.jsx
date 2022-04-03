import { Flex, Box, Divider, Text } from "@chakra-ui/react";

import { BiGlobe, BiRupee } from "react-icons/bi";
import { GrFacebookOption } from "react-icons/gr";
import { ImInstagram } from "react-icons/im";
import { AiOutlineTwitter } from "react-icons/ai";

export default function Footer() {
  return (
    <Box
      minHeight="20%"
      minWidth="100%"
      margin=" 0rem auto auto auto"
      padding="1.3% 8%"
      background="#f7f7f7"
      color="blackAlpha.700"
      zIndex="100"
      bottom="1%"
    >
      <Flex padding="2.7rem 0">
        <Box marginRight="4rem">
          <Text fontWeight="650" fontSize="14.5px">
            Support
          </Text>
          <Text
            width="max-content"
            _hover={{ textDecoration: "underline", cursor: "pointer" }}
            marginTop=".7rem"
          >
            Help Centre
          </Text>
          <Text
            width="max-content"
            _hover={{ textDecoration: "underline", cursor: "pointer" }}
            marginTop=".7rem"
          >
            Safety information
          </Text>
          <Text
            width="max-content"
            _hover={{ textDecoration: "underline", cursor: "pointer" }}
            marginTop=".7rem"
          >
            Cancellation options
          </Text>
          <Text
            width="max-content"
            _hover={{ textDecoration: "underline", cursor: "pointer" }}
            marginTop=".7rem"
          >
            Our COVID-19 Response
          </Text>
          <Text
            width="max-content"
            _hover={{ textDecoration: "underline", cursor: "pointer" }}
            marginTop=".7rem"
          >
            Supporting people with disabilities
          </Text>
          <Text
            width="max-content"
            _hover={{ textDecoration: "underline", cursor: "pointer" }}
            marginTop=".7rem"
          >
            Report a neighbourhood concern
          </Text>
        </Box>
        <Box marginRight="4rem">
          <Text fontWeight="650" fontSize="14.5px">
            Community
          </Text>
          <Text
            width="max-content"
            _hover={{ textDecoration: "underline", cursor: "pointer" }}
            marginTop=".7rem"
          >
            Airbnb.org: disaster relief housing
          </Text>
          <Text
            width="max-content"
            _hover={{ textDecoration: "underline", cursor: "pointer" }}
            marginTop=".7rem"
          >
            Support Afghan refugees
          </Text>
          <Text
            width="max-content"
            _hover={{ textDecoration: "underline", cursor: "pointer" }}
            marginTop=".7rem"
          >
            Combating discrimination
          </Text>
        </Box>
        <Box marginRight="4rem">
          <Text fontWeight="650" fontSize="14.5px">
            Hosting
          </Text>
          <Text
            width="max-content"
            _hover={{ textDecoration: "underline", cursor: "pointer" }}
            marginTop=".7rem"
          >
            Try hosting
          </Text>
          <Text
            width="max-content"
            _hover={{ textDecoration: "underline", cursor: "pointer" }}
            marginTop=".7rem"
          >
            AirCover: protection for Hosts
          </Text>
          <Text
            width="max-content"
            _hover={{ textDecoration: "underline", cursor: "pointer" }}
            marginTop=".7rem"
          >
            Explore hosting resources
          </Text>
          <Text
            width="max-content"
            _hover={{ textDecoration: "underline", cursor: "pointer" }}
            marginTop=".7rem"
          >
            Visit our community forum
          </Text>
          <Text
            width="max-content"
            _hover={{ textDecoration: "underline", cursor: "pointer" }}
            marginTop=".7rem"
          >
            How to host responsibly
          </Text>
        </Box>
        <Box marginRight="4rem">
          <Text fontWeight="650" fontSize="14.5px">
            About
          </Text>
          <Text
            width="max-content"
            _hover={{ textDecoration: "underline", cursor: "pointer" }}
            marginTop=".7rem"
          >
            Newsroom
          </Text>
          <Text
            width="max-content"
            _hover={{ textDecoration: "underline", cursor: "pointer" }}
            marginTop=".7rem"
          >
            Learn about new features
          </Text>
          <Text
            width="max-content"
            _hover={{ textDecoration: "underline", cursor: "pointer" }}
            marginTop=".7rem"
          >
            Letter from our founders
          </Text>
          <Text
            width="max-content"
            _hover={{ textDecoration: "underline", cursor: "pointer" }}
            marginTop=".7rem"
          >
            Careers
          </Text>
          <Text
            width="max-content"
            _hover={{ textDecoration: "underline", cursor: "pointer" }}
            marginTop=".7rem"
          >
            Investors
          </Text>
          <Text
            width="max-content"
            _hover={{ textDecoration: "underline", cursor: "pointer" }}
            marginTop=".7rem"
          >
            Airbnb Luxe
          </Text>
        </Box>
      </Flex>
      <div
        style={{
          background: "lightGrey",
          height: "1px",
        }}
      ></div>
      <Flex marginTop="1.7rem" justifyContent="space-between">
        <Flex
          flexBasis="37%"
          justifyContent="space-between"
          fontSize="14.5px"
          color="blackAlpha.900"
        >
          <Text>© 2022 Airbnb, Inc.</Text>
          <Text color="transparent">·</Text> <Text> Privacy </Text>
          <Text color="transparent">·</Text>
          <Text> Terms </Text>
          <Text color="transparent">·</Text>
          <Text> Sitemap </Text>
          <Text color="transparent">·</Text>
          <Text> Company details </Text>
        </Flex>
        <Flex flexBasis="28%" justifyContent="space-between">
          <Flex flexBasis="50%" justifyContent="space-between">
            <Flex
              style={{ cursor: "pointer" }}
              alignItems="center"
              color="blackAlpha.800"
            >
              <BiGlobe
                style={{ fontSize: "1.2rem", marginTop: "3px" }}
              ></BiGlobe>
              <Text
                marginLeft="5px"
                fontSize="14px"
                fontWeight="600"
                textDecoration="underline"
              >
                English (IN)
              </Text>
            </Flex>
            <Flex
              style={{ cursor: "pointer" }}
              alignItems="center"
              color="blackAlpha.800"
            >
              <BiRupee></BiRupee>{" "}
              <Text
                width="max-content"
                fontSize="14px"
                fontWeight="600"
                textDecoration="underline"
              >
                INR
              </Text>
            </Flex>
          </Flex>
          <Flex
            alignItems="center"
            flexBasis="30%"
            color="blackAlpha.800"
            justifyContent="space-between"
            fontSize="1.2rem"
          >
            <GrFacebookOption style={{ cursor: "pointer" }}></GrFacebookOption>
            <AiOutlineTwitter style={{ cursor: "pointer" }}></AiOutlineTwitter>
            <ImInstagram style={{ cursor: "pointer" }}></ImInstagram>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
//  ·
