// src/queries.ts
import { gql } from '@apollo/client';

export const VEHICLE_LIST_ALL_QUERY = gql`
  query vehicleListAll($size: Int, $page: Int, $search: String) {
    vehicleList(size: $size, page: $page, search: $search) {
      id
      naming {
        make
        model
        version
        edition
        chargetrip_version
      }
      connectors {
        standard
      }
      media {
        image {
          id
          type
          thumbnail_url
          thumbnail_height
          thumbnail_width
        }
        brand {
          id
          type
          thumbnail_url
          thumbnail_height
          thumbnail_width
        }
      }
    }
  }
`;
