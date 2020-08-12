import { Layout } from "../components/Layout";
import React from "react";
import { Flex, Text, AspectRatioBox, Box } from "@chakra-ui/core";
import { Grid } from "@chakra-ui/core/dist";
import { FlexContainer } from "../components/Layout/FlexContainer";
import { useQuery } from "@apollo/react-hooks";
import withApollo from "../utils/withApollo";
import { GET_ALL_PRODUCTS } from "../components/graphql/product/getAllProduct.query";

import { usePagination } from "../hooks/usePagination";
import { PaginationBar } from "../components/PaginationBar/PaginationBar";
import { PongSpinner } from "react-spinners-kit";
import GoogleMap from "../components/Map/Map";

const Home = () => {
  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS, {
    variables: {
      input: {
        page: 1,
        keyword: "Apple Iphone 11 Pro Max",
      },
    },
  });
  if (error) return <Layout></Layout>;
  if (loading)
    return (
      <Layout>
        <Text>
          <PongSpinner size={100} color="#686769" loading={true}></PongSpinner>
        </Text>
      </Layout>
    );

  const products = data?.getAllProduct?.data;
  if (!products || !products.length) {
    return <p>Not found</p>;
  }
  const [page, maxPage, productCards] = usePagination(products);
  return (
    <Layout>
      <Flex as="section" justifyContent="center" backgroundColor="#F9F9F9">
        <FlexContainer padding="5rem" flexWrap={"wrap"}>
          <Grid
            width="100%"
            templateColumns="repeat(auto-fill, minmax(12em, 1fr))"
            gap={["2rem", "2rem", "5rem"]}
          >
            {productCards}
          </Grid>
          <GoogleMap />
        </FlexContainer>
      </Flex>
      <PaginationBar page={page} maxPage={maxPage} />
      {/* <GoogleMap /> */}
    </Layout>
  );
};

export default withApollo({ ssr: true })(Home);
