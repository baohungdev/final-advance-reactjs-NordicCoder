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
} from "@chakra-ui/core";
import NextLink from "next/link";
import React, { useState } from "react";
import { IProduct } from "../../interfaces";
import { ucFirstAllWords } from "../../utils";
import styled from "@emotion/styled";
var numeral = require('numeral');

export const ProductCard: React.FC<IProduct> = (props) => {
  const [loading, setLoading] = useState(true);
  // console.log(theme.colors.black)
  return (
    <NextLink href="/detail/[id]" as={`/detail/${props.id}`} passHref>
      <Link
        _hover={{
          textDecoration: "none",
          color: "secondary.500",
        }}
        _focus={{
          boxShadow: "none",
        }}
      >
        <PseudoBox
          display="flex"
          flexWrap="wrap"
          borderWidth="2px"
          borderColor="blue.300"
          overflow="hidden"
        >
          <Box
            backgroundColor="white"
            flex="0 1 100%"
            borderBottomWidth="1px"
            borderColor="#BBB"
          >
            <Skeleton isLoaded={!loading}>
              <Image
                width="100%"
                height="13rem"
                objectFit="contain"
                src={props.imgUrl}
                onLoad={() => setLoading(false)}
              />
            </Skeleton>
          </Box>

          <Flex
            paddingX="1rem"
            paddingY="2rem"
            width="100%"
            backgroundColor="white"
            justifyContent="center"
          >
            <Text width="100%" color="gray.600" textAlign="center" isTruncated>
              {ucFirstAllWords(props.name)}
            </Text>
          </Flex>
          <Flex
            paddingX="1rem"
            paddingBottom="2rem"
            width="100%"
            backgroundColor="white"
            justifyContent="center"
          >
            <Text width="100%" color="blue.800" textAlign="center" isTruncated>
              {numeral(props.finalPrice).format('0,0[.]00')} 
            </Text>
            <StyledButton
              marginLeft="3px"
              size="xs"
              height="30px"
              width="200px"
              border="1px"
              borderColor="blue.300"
              // variantColor="black"
            >
              Buy It Now
            </StyledButton>{" "}
          </Flex>
        </PseudoBox>
      </Link>
    </NextLink>
  );
};

const StyledButton = styled(Button)`
  &:hover {
    background-color: #fff;
  }
`