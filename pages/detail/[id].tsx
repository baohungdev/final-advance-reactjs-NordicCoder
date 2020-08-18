import { useQuery } from '@apollo/client';
import { Flex } from '@chakra-ui/core';
import { useRouter } from 'next/router';
import React from 'react';
import { GET_PRODUCT_DETAIL } from '../../components/graphql/product/getProductDetail';
import { Layout } from '../../components/Layout';
import Loading from '../../components/Loading/Loading';
import Bo1x from '../../components/RightBox/RightBox';
import { IProductDetail } from '../../interfaces';
import withApollo from '../../utils/withApollo';

const ProductDetail: React.FC<{}> = () => {
  const router = useRouter();
  const { id } = router.query;

  const { loading, error, data } = useQuery(GET_PRODUCT_DETAIL, {
    variables: {
      input: {
        id: id,
      },
    },
  });

  if (error) return <h1>Error</h1>;
  if (loading) return <Loading></Loading>;

  const productDetail: IProductDetail = data?.getProductDetail;

  const { images, name, description, price } = productDetail;

  return (
    <Layout>
      <Flex as='section' justifyContent='center'>
        <Bo1x
          id={productDetail.id}
          images={images}
          name={name}
          description={description}
          price={price}
        />
      </Flex>
    </Layout>
  );
};

export default withApollo({ ssr: true })(ProductDetail);
