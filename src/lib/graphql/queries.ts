import { gql } from "@apollo/client";

export const ARTISTS_QUERY = gql`
  query {
     highlights {
      popularArtists(size: 20) {
        name
        id
        image {
           url
        }
        nationality 
      }
    }
  }
`;