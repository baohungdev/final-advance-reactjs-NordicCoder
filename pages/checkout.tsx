import React, { useContext } from "react";
import CheckoutItem from "../components/checkout/checkout-item";
import { CartContext } from "../providers/cart/cart.provider";
import styled from "@emotion/styled";
import { withRouter } from "next/router";
import StripeCheckoutButton from "../components/checkout/stripe-button";
import { Layout } from "../components/Layout";

const CheckoutPage: React.FC = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <Layout>
      <CheckoutPageContainer>
        <CheckoutHeader>
          <HeaderBlock>
            <span>Product</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Description</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Quantity</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Price</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Remove</span>
          </HeaderBlock>
        </CheckoutHeader>
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <Total>TOTAL: ${cartTotal}</Total>
        <TestWarning>
          *Please use the following test credit card for payments*
          <br />
          4242 4242 4242 4242 - Exp: any future date- CVV: any 3 digits
        </TestWarning>
        <StyledButton price={cartTotal} />
      </CheckoutPageContainer>
    </Layout>
  );
};

export default withRouter(CheckoutPage);

// styles

const CheckoutPageContainer = styled.div`
  width: 90%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

const Total = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

const TestWarning = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: red;
`;

const StyledButton = styled(StripeCheckoutButton)`
  margin-left: auto;
  margin-top: 50px;
`;
