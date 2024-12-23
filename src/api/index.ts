import { apiBaseUrl } from '@/constants';
import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: apiBaseUrl, 
  cache: new InMemoryCache(),
});


