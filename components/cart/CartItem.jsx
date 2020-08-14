import React from "react";
import styled from "@emotion/styled";
import { Text } from "@chakra-ui/core";

const CartItem = ({ item }) => {
  console.log(item);
  return (
    <CartItemContainer>
      <Image src={item.imgUrl} alt="item" />
      <CartItemDetails>
        <Name>{item.name}</Name>
        <span>
          {item.quantity} x ${item.price}
        </span>
      </CartItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;

const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 100px;
  margin-bottom: 15px;
`;

const Image = styled.img`
  width: 20%;
`;

const CartItemDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;

const Name = styled(Text)`
  font-size: 16px;
`;
