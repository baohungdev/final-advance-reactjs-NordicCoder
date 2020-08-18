import { useQuery } from '@apollo/react-hooks';
import { Flex } from '@chakra-ui/core';
import { Grid } from '@chakra-ui/core/dist';
import styled from '@emotion/styled';
import React from 'react';
import { GET_ALL_PRODUCTS } from '../components/graphql/product/getAllProduct.query';
import { Layout } from '../components/Layout';
import { FlexContainer } from '../components/Layout/FlexContainer';
import Loading from '../components/Loading/Loading';
import GoogleMap from '../components/Map/Map';
import { PaginationBar } from '../components/PaginationBar/PaginationBar';
import { usePagination } from '../hooks/usePagination';
import withApollo from '../utils/withApollo';
const Home: React.FC = () => {
  // Query products lists

  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS, {
    variables: {
      input: {
        page: 1,
        keyword: 'Iphone 11',
      },
    },
  });

  if (error) return <Layout>Error</Layout>;
  if (loading) return <Loading></Loading>;

  const products = data?.getAllProduct?.data;
  if (!products || !products.length) {
    return <p>Not found</p>;
  }
  // usePagination hook
  const [page, maxPage, productCards] = usePagination(products);

  return (
    <Layout>
      <StyledFlex as='section'>
        <StyledFlexContainer>
          <StyledGrid gap={['2rem', '2rem', '5rem']}>{productCards}</StyledGrid>
        </StyledFlexContainer>
      </StyledFlex>
      <PaginationBar page={page} maxPage={maxPage} />
      <GoogleMap></GoogleMap>
    </Layout>
  );
};

export default withApollo({ ssr: true })(Home);

// Styles

const StyledGrid = styled(Grid)`
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(12em, 1fr));
`;

const StyledFlex = styled(Flex)`
  justify-content: center;
  background-color: #f9f9f9;
`;

const StyledFlexContainer = styled(FlexContainer)`
  padding: 5rem;
  flex-wrap: wrap;
`;
