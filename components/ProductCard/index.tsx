import {
  Box,
  Button,
  Flex,
  Image,
  Link,
  PseudoBox,
  Text,
  Tooltip,
  useToast,
} from "@chakra-ui/core";

import NextLink from "next/link";
import React, { useContext, Fragment } from "react";
import { IProduct } from "../../interfaces";
import { ucFirstAllWords } from "../../utils";
import styled from "@emotion/styled";
import { CartContext } from "../../providers/cart/cart.provider";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
} from "react-html-parser";

var numeral = require("numeral");

const ProductCard: React.FC<IProduct> = (props) => {
  const { addItem } = useContext(CartContext);

  const item = {
    id: props.id,
    name: props.name,
    price: props.price,
    imgUrl: props.imgUrl,
  };

  const toast = useToast();
  return (
    <>
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
          <Tooltip
            aria-label="hung"
            hasArrow
            label="View it"
            placement="bottom"
            bg="blue.500"
            fontSize="20px"
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
          </Tooltip>
          <Flex
            paddingX="10px"
            paddingY="10px"
            width="100%"
            backgroundColor="white"
            justifyContent="center"
          >
            <Text width="100%" color="gray.600" textAlign="center" isTruncated>
              {ucFirstAllWords(props.name)}
            </Text>
          </Flex>
          <Flex
            paddingBottom="10px"
            width="100%"
            backgroundColor="white"
            justifyContent="center"
          >
            <Text width="100%" color="red.800" textAlign="center" isTruncated>
              {numeral(props.price).format("0,0[.]00")}
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
              bg="blue.500"
              fontSize="20px"
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
                onClick={() => {
                  toast({
                    title: "Added to cart",
                    description: `${props.name}`,
                    status: "info",
                    duration: 2000,
                    isClosable: true,
                  });
                }}
              >
                Buy it !
              </StyledButton>
            </Tooltip>
          </Flex>
        </PseudoBox>
      </Link>
    </>
  );
};

const StyledButton = styled(Button)`
  &:hover {
    background-color: #fff;
  }
`;

const Stylediframe = styled.iframe`
  height: 100%;
`;

export default ProductCard;
