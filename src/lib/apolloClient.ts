import { ApolloClient, InMemoryCache } from '@apollo/client';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const client = new ApolloClient({
  uri: API_BASE_URL,
  cache: new InMemoryCache(),
});

export default client;