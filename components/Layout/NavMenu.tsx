import {
  Flex,
  Button,
  FlexProps,
  ButtonProps,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/core";
import NextLink from "next/link";

import { FlexNavItem } from "./FlexNavItem";
import { IoMdList, IoMdCart, IoMdPerson, IoMdHome } from "react-icons/io";
import { FcHome } from "react-icons/fc";
import { theme } from "../../theme";
import { useToast } from "@chakra-ui/core";
import { useDisclosure } from "@chakra-ui/core";

const NavLinkButton: React.FC<ButtonProps> = (props) => (
  <Button variant="link" color="white" {...props}></Button>
);

export const NavMenu: React.FC<FlexProps> = (props) => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      {...props}
      as="nav"
      bg={theme.colors.primary[100]}
      width="full"
      justifyContent="space-around"
    >
      <FlexNavItem display={["block", "block", "none"]}>
        <NavLinkButton leftIcon={IoMdHome}>Home</NavLinkButton>
      </FlexNavItem>

      <FlexNavItem>
        <NavLinkButton leftIcon={IoMdList} onClick={onOpen}>
          List
        </NavLinkButton>
        <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">Apple</DrawerHeader>
            <DrawerBody>
              <NextLink href={`/search?q=Iphone-11`}>Iphone 11</NextLink>
              <br/>
              <NextLink href={`/search?q=Iphone-11-pro`}>Iphone 11 Pro</NextLink>
              <br/>
              <NextLink href={`/search?q=Iphone-11-pro-max`}>Iphone 11 Pro Max</NextLink>
              <br/>
              <p>Iphone 11 Pro Max</p>
            </DrawerBody>
            <DrawerHeader borderBottomWidth="1px">Samsung</DrawerHeader>
            <DrawerBody>
              <p>Coming soon...</p>
              <p>Coming soon...</p>
              <p>Coming soon...</p>
              <p>Coming soon...</p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </FlexNavItem>

      <FlexNavItem>
        <NavLinkButton leftIcon={IoMdCart}>99k</NavLinkButton>
      </FlexNavItem>

      <FlexNavItem>
        <NavLinkButton
          leftIcon={IoMdPerson}
          onClick={() =>
            toast({
              title: "Coming soon",
              description: "Unable to create user account.",
              status: "error",
              duration: 9000,
              isClosable: true,
            })
          }
        >
          Login
        </NavLinkButton>
      </FlexNavItem>
    </Flex>
  );
};
