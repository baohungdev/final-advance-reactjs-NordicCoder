import React, { useContext } from "react";

import { CartContext } from "../../providers/cart/cart.provider";

import { IoMdAlbums, IoMdCart } from "react-icons/io";
import styled from "@emotion/styled";
import {
  Button,
  IButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverCloseButton,
  PopoverBody,
  PopoverFooter,
} from "@chakra-ui/core";

const NavLinkButton = (props) => (
  <Button variant="link" color="white" {...props}></Button>
);

const CartIcon = () => {
  const { toggleHidden, cartItemsCount } = useContext(CartContext);

  return (
    <NavLinkButton leftIcon={IoMdCart} onClick={toggleHidden}>
      <ItemsCount>{cartItemsCount}</ItemsCount>
    </NavLinkButton>
  );
};

export default CartIcon;

const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ItemsCount = styled.span`
  font-size: 15px;
  font-weight: bold;
  bottom: 12px;
`;
