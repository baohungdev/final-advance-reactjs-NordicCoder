import { gql } from "@apollo/client";

export const GET_PRODUCT_DETAIL = gql`
  query getProductDetail($input: GetProductDetailInput!) {
    getProductDetail(input: $input) {
      id
      sku
      name
      price
      finalPrice
      promotionPercent
      namePath
      imgUrl
      description
      images
    }
  }
`;
