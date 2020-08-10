import { Flex, Button, FlexProps, ButtonProps } from "@chakra-ui/core";
import { FlexNavItem } from "./FlexNavItem";
import { IoMdList, IoMdCart, IoMdPerson, IoMdHome } from "react-icons/io";
import { FcHome } from "react-icons/fc";
import { theme } from "../../theme";
const NavLinkButton: React.FC<ButtonProps> = (props) => (
  <Button variant="link" color="white" {...props}></Button>
);

export const NavMenu: React.FC<FlexProps> = (props) => {
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
        <NavLinkButton leftIcon={IoMdList}>List</NavLinkButton>
      </FlexNavItem>

      <FlexNavItem>
        <NavLinkButton leftIcon={IoMdCart}>99k</NavLinkButton>
      </FlexNavItem>

      <FlexNavItem>
        <NavLinkButton leftIcon={IoMdPerson}>Đăng nhập</NavLinkButton>
      </FlexNavItem>
    </Flex>
  );
};
