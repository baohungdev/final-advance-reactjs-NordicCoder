import { useRouter } from "next/router";
import { Flex, IconButton, Text } from "@chakra-ui/core/dist";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import React from "react";

export const PaginationBar: React.FC<{ page: number; maxPage: number }> = (
  props
) => {
  const router = useRouter();
  return (
    <Flex
      width="100%"
      justifyContent="center"
      marginY="3rem"
      alignItems="center"
    >
      <IconButton
        backgroundColor={"white"}
        onClick={() => {
          if (props.page > 1 || props.maxPage !== 1) {
            router.push(`/?p=${props.page - 1}`).then();
          }
        }}
        size="lg"
        variant="outline"
        variantColor="primary"
        aria-label="上一页"
        icon={AiOutlineArrowLeft}
      />
      <Flex paddingX="1rem">
        <Text fontSize="2xl" color="primary.500">
          {props.page} / {props.maxPage}
        </Text>
      </Flex>
      <IconButton
        backgroundColor={"white"}
        onClick={() => {
          if (props.page !== props.maxPage) {
            router.push(`/?p=${props.page + 1}`).then();
          }
        }}
        size="lg"
        variant="outline"
        variantColor="primary"
        aria-label="下一页"
        icon={AiOutlineArrowRight}
      />
    </Flex>
  );
};
