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
import CartIcon from "../cart/CartIcon";
import { CartContext } from "../../providers/cart/cart.provider";
import { useContext } from "react";
import CartDropdown from "../cart/CartDropdown";

export const NavLinkButton: React.FC<ButtonProps> = (props) => (
  <Button variant="link" color="white" {...props}></Button>
);

const NavMenu: React.FC<FlexProps> = (props) => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { hidden } = useContext(CartContext);

  return (
    <Flex
      {...props}
      as="nav"
      bg={theme.colors.primary[100]}
      width="full"
      justifyContent="space-around"
    >
      <FlexNavItem display={["block", "block", "none"]}>
        <NextLink href={`/`}>
          <NavLinkButton size="lg" leftIcon={IoMdHome}>
            Home
          </NavLinkButton>
        </NextLink>
      </FlexNavItem>

      <FlexNavItem>
        <NavLinkButton size="lg" leftIcon={IoMdList} onClick={onOpen}>
          List
        </NavLinkButton>
        <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">Apple</DrawerHeader>
            <DrawerBody>
              <NextLink href={`/search?q=Iphone-11`}>Iphone 11</NextLink>
              <br />
              <NextLink href={`/search?q=Iphone-11-pro`}>
                Iphone 11 Pro
              </NextLink>
              <br />
              <NextLink href={`/search?q=Iphone-11-pro-max`}>
                Iphone 11 Pro Max
              </NextLink>
              <br />
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
        <CartDropdown />
      </FlexNavItem>

      <FlexNavItem>
        <NavLinkButton
          size="lg"
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

export { NavMenu };
