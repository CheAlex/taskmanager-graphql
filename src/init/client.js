import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const uri = process.env.NODE_ENV === 'development'
  ? 'http://localhost:4000/graphql'
  : 'http://localhost:4000/graphql';

const link = createHttpLink({
  uri,
  credentials: 'include',
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});
