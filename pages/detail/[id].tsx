import React, { useState } from 'react'
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router'
import { GET_PRODUCT_DETAIL } from '../../components/graphql/product/getProductDetail';
import withApollo from '../../utils/withApollo';
import { IProductDetail } from '../../interfaces';
import { Flex} from "@chakra-ui/core";
import { Layout } from "../../components/Layout";

import RightBox from '../../components/RightBox/RightBox';


const ProductDetail: React.FC<{}> = () => {

  const router = useRouter()
  const { id } = router.query

  const { loading, error, data } = useQuery(GET_PRODUCT_DETAIL, {
    variables: {
      input: {
        id: id
      },
    },
  });

  if (error) return <h1>Error</h1>
  if (loading) return <h1>Loading...</h1>

  const productDetail: IProductDetail = data?.getProductDetail;

  const { promotionPercent, images, name, description, price } = productDetail;


  return <Layout>
    <Flex as="section" justifyContent="center">
      <RightBox images={images} name={name} description={description} price={price}/>
    </Flex>

  </Layout>
}


export default withApollo({ ssr: true })(ProductDetail);