import React, { useContext } from "react";

import { CartContext } from "../../providers/cart/cart.provider";
import styled from "@emotion/styled";
import { Button } from "@chakra-ui/core";

const CheckoutItem = ({ cartItem }) => {
  const { name, imgUrl, price, quantity } = cartItem;
  const { addItem, removeItem, clearItemFromCart } = useContext(CartContext);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <StyledImage src={imgUrl} alt="item" />
      </ImageContainer>
      <StyledName>
        {name.slice(0, 20) + (name.length > 20 ? "..." : "")}
      </StyledName>
      <StyledQuantity>
        <StyledArrow onClick={() => removeItem(cartItem)}>&#10094;</StyledArrow>
        <StyledValue>{quantity}</StyledValue>
        <StyledArrow onClick={() => addItem(cartItem)}>&#10095;</StyledArrow>
      </StyledQuantity>
      <StyledPrice>{price}</StyledPrice>
      <Button
        className="remove-button"
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10005;
      </Button>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;

const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;

const StyledName = styled.span`
  width: 30%;
`;
const StyledPrice = styled.span`
  width: 23%;
`;

const StyledQuantity = styled.span`
  display: flex;
  width: 16%;
`;

const StyledArrow = styled.div`
  cursor: pointer;
`;

const StyledValue = styled.span`
  margin: 0 10px;
`;

const StyledButton = styled(Button)`
  padding-left: 5rem;
  cursor: pointer;
`;
