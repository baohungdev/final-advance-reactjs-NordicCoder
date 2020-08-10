import { gql } from "@apollo/client";

export const GET_ALL_PRODUCTS = gql`
  query getAllProduct($input: GetAllProductInput!) {
    getAllProduct(input: $input) {
      data {
        id
        sku
        name
        price
        finalPrice
        promotionPercent
        namePath
        imgUrl
      }
    }
  }
`;
