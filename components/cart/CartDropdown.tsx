import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
} from '@chakra-ui/core';
import styled from '@emotion/styled';
import { withRouter } from 'next/router';
import React, { useContext } from 'react';
import { IoMdCart } from 'react-icons/io';
import { CartContext } from '../../providers/cart/cart.provider';
import CartItem from './CartItem';

const CartDropdown = (props) => {
  const { cartItems, cartItemsCount } = useContext(CartContext);
  return (
    <StyledPoper usePortal>
      <PopoverTrigger>
        <StyledTriggerButton size='lg' rightIcon={IoMdCart} variant='link'>
          {cartItemsCount > 1
            ? `${cartItemsCount} items`
            : `${cartItemsCount} item`}
        </StyledTriggerButton>
      </PopoverTrigger>
      <StyledPopoverContent zIndex={2}>
        <PopoverArrow />
        <StyledPoperHeader>Hi Buddy!</StyledPoperHeader>
        <PopoverCloseButton />
        <StyledPopoverBody>
          {cartItems.length ? (
            cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))
          ) : (
            <EmptyMessage>Your cart is empty</EmptyMessage>
          )}
        </StyledPopoverBody>
        <StyledPoperFooter>
          <Button
            leftIcon={IoMdCart}
            onClick={() => {
              props.router.push('/checkout');
            }}
          >
            Go to Checkout
          </Button>
        </StyledPoperFooter>
      </StyledPopoverContent>
    </StyledPoper>
  );
};

export default withRouter(CartDropdown);

// Styles

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

const StyledTriggerButton = styled(Button)`
  color: white;
`;

const StyledPopoverBody = styled(PopoverBody)`
  text-align: center;
`;

const StyledPoperHeader = styled(PopoverHeader)`
  font-weight: 500;
  margin: auto;
`;
const StyledPoperFooter = styled(PopoverFooter)`
  font-weight: 500;
  margin: auto;
`;
