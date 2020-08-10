import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/core";

import Head from "next/head";
import { IoMdSearch } from "react-icons/io";
import { FcHome } from "react-icons/fc";
import { NavMenu } from "./NavMenu";
import { FlexNavItem } from "./FlexNavItem";
import { useState } from "react";
import { theme } from "../../theme";

export const Header = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <Flex
        as="header"
        backgroundColor={theme.colors.primary[100]}
        justifyContent="center"
      >
        <Flex flex="0 1 100rem" maxWidth="80rem">
          <FlexNavItem display={[show ? "Flex" : "none", null, "Flex"]}>
            <Box width="10rem" flex="0 0 auto">
              {/* <img src="https://frontend.tikicdn.com/img/tiki.svg" alt="" /> */}
              <img
                src="https://salt.tikicdn.com/ts/banner/33/ba/89/54c02d2475983f93a024c0cd13f238e4.png"
                alt=""
              />
            </Box>
          </FlexNavItem>

          <FlexNavItem flex="1 1 auto">
            <InputGroup flex="1 1 40rem" maxWidth="40rem">
              <Input
                onBlur={() => setShow(true)}
                onFocus={() => setShow(false)}
                placeholder="Search"
                focusBorderColor="primary.500"
              ></Input>
              <InputRightElement>
                <Box as={IoMdSearch} size="2rem" color="primary.500"></Box>
              </InputRightElement>
            </InputGroup>
          </FlexNavItem>
          <NavMenu display={["none", "none", "flex"]} flex="0"></NavMenu>
        </Flex>
      </Flex>
      <NavMenu
        display={["flex", "flex", "none"]}
        position="fixed"
        bottom="0"
      ></NavMenu>
    </>
  );
};
