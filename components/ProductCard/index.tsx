import {
  Box,
  Button,
  Flex,
  Image,
  Link,
  PseudoBox,
  Skeleton,
  Text,
} from "@chakra-ui/core";
import NextLink from "next/link";
import React, { useState } from "react";
import { IProduct } from "../../interfaces";
import { ucFirstAllWords } from "../../utils";

export const ProductCard: React.FC<IProduct> = (props) => {
  const [loading, setLoading] = useState(true);
  return (
    <NextLink href="/products/[id]" as={`/products/${props.namePath}`} passHref>
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
          borderColor="#BBB"
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
            <Button variantColor="primary">{props.price}$</Button>
          </Flex>
        </PseudoBox>
      </Link>
    </NextLink>
  );
};
