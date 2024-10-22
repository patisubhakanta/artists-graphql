import { ApolloClient, InMemoryCache } from '@apollo/client';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const client = new ApolloClient({
  uri: "https://store-q9quebnc.saleor.cloud/graphql/",
  cache: new InMemoryCache(),
});

export default client;