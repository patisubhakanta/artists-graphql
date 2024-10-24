import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query GetProducts($search: String) {
    products(first: 30, channel: "default-channel", filter: { search: $search }) {
      edges {
        node {
          id
          name
          description
          pricing {
            priceRange {
              start {
                gross {
                  amount
                  currency
                }
              }
            }
          }
          thumbnail {
            url
            alt
          }
        }
      }
    }
  }
`;

export const GET_PRODUCT = gql`
  query GetProduct($id: ID!) {
    product(id: $id, channel: "default-channel") {
      id
      name
      description
      images {
        url
      }
      category {
        name
      }
      pricing {
        priceRange {
          start {
            gross {
              amount
              currency
            }
          }
        }
      }
    }
  }
`;