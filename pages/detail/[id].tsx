import React from 'react'
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router'
import { GET_PRODUCT_DETAIL } from '../../components/graphql/product/getProductDetail';
import withApollo from '../../utils/withApollo';
import { IProductDetail } from '../../interfaces';
import { Divider, Flex, Image, Text, useToast } from "@chakra-ui/core";
import { Layout } from "../../components/Layout";
import { Button } from "@chakra-ui/core/dist";
import { IoIosArrowDropleftCircle, IoMdCart } from "react-icons/io";


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
    if (loading) return <h1>h1</h1>
    const productDetail: IProductDetail = data?.getProductDetail;
    const {images, name, description, price,imgUrl} = productDetail;
    return <Layout>
    <Flex as="section" justifyContent="center" paddingY="10rem">
      <Flex
        flex="0 1 55rem"
        backgroundColor="white"
        justifyContent="center"
        flexWrap="wrap"
        paddingX={["1rem", null, "5rem"]}
      >
        <Flex flex="0 1 20rem" paddingY={["2rem", null, "5rem"]}>
          <img src={imgUrl} alt=""/>
        </Flex>
        <Flex
          display={["none", null, "flex"]}
          flex="0 1 5rem"
          paddingY="2rem"
          justifyContent="center"
        >
          <Divider orientation="vertical" borderColor="#BBB" />
        </Flex>
        <Flex
          flex="0 1 20rem"
          paddingY={["2rem", null, "5rem"]}
          justifyContent="center"
          flexWrap="wrap"
          alignItems="center"
        >
          <Text fontSize="2xl" width="100%">
            {name}
          </Text>
          <Flex flex="0 1 100%">
            <Text fontSize="3xl" fontWeight={"600"}>
              {}
            </Text>
          </Flex>
          <Text>{}</Text>
          <Flex paddingY="1rem" flex="0 1 100%">
            <Button
              variantColor="primary"
              width="100%"
              leftIcon={IoMdCart}
            >
              
            </Button>
          </Flex>
        </Flex>
        <Flex paddingBottom="2rem">
          <Button
            onClick={() => router.push("/")}
            variantColor="secondary"
            leftIcon={IoIosArrowDropleftCircle}
          >
            
          </Button>
        </Flex>
      </Flex>
    </Flex>
  </Layout>
}

export default withApollo({ ssr: true })(ProductDetail);