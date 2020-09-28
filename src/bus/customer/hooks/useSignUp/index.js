// Core
import { loader } from 'graphql.macro';
import { useMutation } from '@apollo/react-hooks';

// Mutations
const mutationSignUp = loader('./gql/mutationSignUp.graphql');

export const useSignUp = () => {
  const [_save, { data, error }] = useMutation(mutationSignUp);

  const saveCustomer = (customer) => {
    _save({
      variables: {
        customer
      }
    }).catch(({message}) => {
      console.error(message);
    });
  };

  return {
    error,
    saveCustomer,
    createdCustomer: data && data.signUp
  }
}
