import {
  Box,
  Button,
  Flex,
  Image,
  Link,
  PseudoBox,
  Skeleton,
  Text,
  theme,
  Tooltip,
} from "@chakra-ui/core";
import NextLink from "next/link";
import React, { useState, useContext } from "react";
import { IProduct } from "../../interfaces";
import { ucFirstAllWords } from "../../utils";
import styled from "@emotion/styled";
import { CartContext } from "../../providers/cart/cart.provider";
var numeral = require("numeral");

const ProductCard: React.FC<IProduct> = (props) => {
  const [Loading, setLoading] = useState(true);
  const { addItem, cartItems, cartItemsCount, cartTotal } = useContext(
    CartContext
  );

  const item = {
    id: props.id,
    name: props.name,
    price: props.price,
    imgUrl: props.imgUrl,
  };

  return (
    <div>
      <Link
        _hover={{
          textDecoration: "none",
          color: "secondary.100",
        }}
        _focus={{
          boxShadow: "none",
        }}
      >
        <PseudoBox
          display="flex"
          flexWrap="wrap"
          borderWidth="2px"
          borderColor="blue.200"
          overflow="hidden"
          _hover={{ borderColor: "blue.500" }}
          borderRadius="5px"
        >
          <Box
            backgroundColor="white"
            flex="0 1 100%"
            borderBottomWidth="1px"
            borderColor="#BBB"
          >
            <NextLink href={`/detail/${props.id}`}>
              <Image
                width="100%"
                height="13rem"
                objectFit="contain"
                src={props.imgUrl}
              />
            </NextLink>
          </Box>

          <Flex
            paddingX="1rem"
            paddingY="1rem"
            width="100%"
            backgroundColor="white"
            justifyContent="center"
          >
            <Text width="100%" color="gray.600" textAlign="center" isTruncated>
              {ucFirstAllWords(props.name)}
            </Text>
          </Flex>
          <Flex
            paddingBottom="6px"
            width="100%"
            backgroundColor="white"
            justifyContent="center"
          >
            <Text width="100%" color="red.800" textAlign="center" isTruncated>
              {numeral(props.finalPrice).format("0,0[.]00")}
            </Text>
          </Flex>
          <Flex
            paddingBottom="1rem"
            backgroundColor="WHITE"
            justify="center"
            margin="auto"
            width="100%"
          >
            <Tooltip
              aria-label="hung"
              hasArrow
              label="Add To Cart"
              placement="bottom"
              bg="green.600"
            >
              <StyledButton
                margin="auto"
                size="md"
                height="30px"
                width="100px"
                border="1px"
                borderColor="red.500"
                variantColor="teal"
                variant="outline"
                onClick={() => addItem(item)}
              >
                Buy it !
              </StyledButton>
            </Tooltip>
          </Flex>
        </PseudoBox>
      </Link>
    </div>
  );
};

const StyledButton = styled(Button)`
  &:hover {
    background-color: #fff;
  }
`;

const StyledLink = styled(Link)`
  &:hover {
    background-color: #fff;
  }
`;

export default ProductCard;
