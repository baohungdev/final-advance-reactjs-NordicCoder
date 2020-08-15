import React from "react";
import styled from "@emotion/styled";
import { Text, Divider } from "@chakra-ui/core";
import { withRouter } from "next/router";

const CartItem = ({ item }) => {
  return (
    <CartItemContainer>
      <Divider />
      <Image src={item.imgUrl} alt="item" />
      <CartItemDetails>
        <Name>
          {item.name.slice(0, 20) + (item.name.length > 20 ? "..." : "")}
        </Name>
        <span>
          {item.quantity} x ${item.price}
        </span>
      </CartItemDetails>
    </CartItemContainer>
  );
};

export default withRouter(CartItem);

const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 100px;
  margin-bottom: 15px;
  margin-top: 10px;
`;

const Image = styled.img`
  width: 30%;
`;

const CartItemDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
  font-weight: 500;
`;

const Name = styled.a`
  font-size: 15px;
  &: hover {
    text-decoration: underline;
  }
`;
