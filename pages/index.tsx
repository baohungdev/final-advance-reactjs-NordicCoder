import { Layout } from "../components/Layout";
import React from "react";
import { Flex, Text } from "@chakra-ui/core";
import { Grid } from "@chakra-ui/core/dist";
import { ProductCard } from "../components/ProductCard";
import { FlexContainer } from "../components/Layout/FlexContainer";
import { useQuery } from "@apollo/react-hooks";
import withApollo from "../utils/withApollo";
import { GET_ALL_PRODUCTS } from "../components/graphql/product/getAllProduct.query";
import { IProduct } from "../interfaces";
import { usePagination } from "../hooks/usePagination";
import { PaginationBar } from "../components/PaginationBar/PaginationBar";
const Home = () => {
  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS, {
    variables: {
      input: {
        page: 1,
        keyword: "Iphone 11",
      },
    },
  });
  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading...</h1>;

  const products = data?.getAllProduct?.data;
  if (!products || !products.length) {
    return <p>Not found</p>;
  }
  const [page, maxPage, productCards] = usePagination(products);
  return (
    <Layout>
      <Flex as="section" justifyContent="center" backgroundColor="#F9F9F9">
        <FlexContainer padding="4rem" flexWrap={"wrap"}>
          <Grid
            width="100%"
            templateColumns="repeat(auto-fill, minmax(12em, 1fr))"
            gap={["2rem", "2rem", "5rem"]}
          >
            {products.map((product: IProduct) => (
              <ProductCard
                key={product.id}
                imgUrl={product.imgUrl}
                id={product.id}
                price={product.price}
                name={product.name}
                namePath={product.namePath}
              />
            ))}
          </Grid>
          <PaginationBar page={page} maxPage={maxPage} />
        </FlexContainer>
      </Flex>
    </Layout>
  );
};

export default withApollo({ ssr: true })(Home);
