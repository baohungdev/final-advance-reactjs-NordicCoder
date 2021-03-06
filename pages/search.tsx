import { useQuery } from '@apollo/react-hooks';
import { Flex } from '@chakra-ui/core';
import { Grid } from '@chakra-ui/core/dist';
import { useRouter } from 'next/router';
import React from 'react';
import { GET_ALL_PRODUCTS } from '../components/graphql/product/getAllProduct.query';
import { Layout } from '../components/Layout';
import { FlexContainer } from '../components/Layout/FlexContainer';
import Loading from '../components/Loading/Loading';
import { PaginationBar } from '../components/PaginationBar/PaginationBar';
import { usePagination } from '../hooks/usePagination';
import withApollo from '../utils/withApollo';

const Home: React.FC = () => {
  const router = useRouter();

  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS, {
    variables: {
      input: {
        page: 1,
        keyword: router.query.q,
      },
    },
  });
  if (error) return <Layout></Layout>;
  if (loading) return <Loading></Loading>;

  const products = data?.getAllProduct?.data;
  if (!products || !products.length) {
    return <p>Not found</p>;
  }
  const [page, maxPage, productCards] = usePagination(products);
  return (
    <Layout>
      <Flex as='section' justifyContent='center' backgroundColor='#F9F9F9'>
        <FlexContainer padding='5rem' flexWrap={'wrap'}>
          <Grid
            width='100%'
            templateColumns='repeat(auto-fill, minmax(12em, 1fr))'
            gap={['2rem', '2rem', '5rem']}
          >
            {productCards}
          </Grid>
        </FlexContainer>
      </Flex>
      <PaginationBar page={page} maxPage={maxPage} />
    </Layout>
  );
};

export default withApollo({ ssr: true })(Home);
