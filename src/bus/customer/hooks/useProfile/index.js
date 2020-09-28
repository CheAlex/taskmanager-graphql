// Core
import { loader } from 'graphql.macro';
import { useQuery } from '@apollo/react-hooks';

// Queries
const queryProfile = loader('./gql/queryProfile.graphql');

export const useProfile = () => {
  const { data, error } = useQuery(queryProfile);

  return {
    error,
    authenticatedCustomer: data && data.me
  }
}
