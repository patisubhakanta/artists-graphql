// app/vehicle-list/page.tsx
import React from 'react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

// Define your GraphQL query
const VEHICLE_LIST_ALL_QUERY = gql`
  query VehicleList($size: Int!, $page: Int!, $search: String) {
    vehicleList(size: $size, page: $page, search: $search) {
      id
      media {
        image {
          thumbnail_url
        }
      }
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
    }
  }
`;

export default async function Vlist() {
  // Create Apollo Client
  const client = new ApolloClient({
    uri: 'YOUR_GRAPHQL_ENDPOINT', // replace with your GraphQL endpoint
    cache: new InMemoryCache(),
  });

  // Fetch data
  const { data } = await client.query({
    query: VEHICLE_LIST_ALL_QUERY,
    variables: { size: 20, page: 0},
  });

  const vehicles = data?.vehicleList || [];

  return (
    <div className="max-w-lg mx-auto mt-10">
      <h1 className="text-lg font-bold">Vehicle List</h1>
      

      <ul className="mt-4">
        {vehicles.length === 0 ? (
          <p>No vehicles found.</p>
        ) : (
          vehicles.map((vehicle:any) => (
            <li key={vehicle.id} className="border-b py-2 flex items-center">
              <img
                src={vehicle.media.image.thumbnail_url}
                alt={`${vehicle.naming.make} ${vehicle.naming.model}`}
                className="w-16 h-16 mr-4"
              />
              <div>
                <h3 className="font-bold">
                  {vehicle.naming.make} {vehicle.naming.model}
                </h3>
                <p>Version: {vehicle.naming.version}</p>
                <p>Edition: {vehicle.naming.edition}</p>
                <p>Chargetrip Version: {vehicle.naming.chargetrip_version}</p>
                <p>Standard Connectors: {vehicle.connectors.map((conn:any) => conn.standard).join(', ')}</p>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

