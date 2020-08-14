import React, { useContext } from "react";

import CartItem from "./CartItem";
import { CartContext } from "../../providers/cart/cart.provider";

import { Button } from "@chakra-ui/core";
import styled from "@emotion/styled";
import { withRouter } from "next/router";

const CartDropdown = ({ router }) => {
  const { cartItems, toggleHidden } = useContext(CartContext);
  console.log(cartItems);
  return (
    <CartDropdownContainer>
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
    </CartDropdownContainer>
  );
};

export default withRouter(CartDropdown);

const CartDropdownContainer = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

const CartItems = styled.div`
  height: 600px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  padding: 1rem;
`;
