import { gql } from '@apollo/client';

export const GET_ALL_PRODUCTS = gql`
  query getAllProduct($input: GetAllProductInput!) {
    getAllProduct(input: $input) {
      data {
        id
        name
        price
        imgUrl
      }
    }
  }
`;
