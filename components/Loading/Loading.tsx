import React from "react";
import { Layout } from "../Layout";
import { Text, Flex } from "@chakra-ui/core";
import { PongSpinner } from "react-spinners-kit";

const Loading: React.FC<{}> = () => (
  <Layout>
    <Flex justifyItems="center">
      <Text>
        <PongSpinner size={200} color="#686769" loading={true}></PongSpinner>
      </Text>
    </Flex>
  </Layout>
);

export default Loading;
