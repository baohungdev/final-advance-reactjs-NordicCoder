import React, { useContext } from "react";

import CartItem from "./CartItem";
import { CartContext } from "../../providers/cart/cart.provider";

import { Button } from "@chakra-ui/core";
import styled from "@emotion/styled";
import { withRouter } from "next/router";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverCloseButton,
  PopoverBody,
  PopoverFooter,
} from "@chakra-ui/core";
import { IoMdCart } from "react-icons/io";
const CartDropdown = ({ router }) => {
  const { cartItems } = useContext(CartContext);
  return (
    <StyledPoper usePortal>
      <PopoverTrigger>
        <Button size="lg" leftIcon={IoMdCart} variant="link" color="white">
          Cart
        </Button>
      </PopoverTrigger>
      <StyledPopoverContent zIndex={2}>
        <PopoverArrow />
        <PopoverHeader fontWeight="500" margin="auto">
          Hi Buddy!
        </PopoverHeader>
        <PopoverCloseButton />
        <PopoverBody justify="center">
          {cartItems.length ? (
            cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))
          ) : (
            <EmptyMessage>Your cart is empty</EmptyMessage>
          )}
        </PopoverBody>
        <PopoverFooter margin="auto">
          <Button
            leftIcon={IoMdCart}
            onClick={() => {
              router.push("/checkout");
            }}
          >
            Go to Checkout
          </Button>
        </PopoverFooter>
      </StyledPopoverContent>
    </StyledPoper>
  );
};
{
  /* <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button
        marginTop="auto"
        onClick={() => {
          toggleHidden();
          router.push("/checkout");
        }}
      >
        GO TO CHECKOUT
      </Button>
    </CartDropdownContainer> */
}
export default withRouter(CartDropdown);

const CartDropdownContainer = styled.div`
  margin-top: 2px;
  position: absolute;
  width: 350px;
  height: 400px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 2px solid #189eff;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

const EmptyMessage = styled.span`
  font-size: 18px;
`;

const CartItems = styled.div`
  height: 600px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  padding: 1rem;
`;

const StyledPoper = styled(Popover)``;

const StyledPopoverContent = styled(PopoverContent)`
  height: 400px;
  overflow: scroll;
`;
