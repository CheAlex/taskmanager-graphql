// Core
import { loader } from 'graphql.macro';
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';

// Book
import { book } from '../../../../navigation/book';

// Mutations
const mutationLogout = loader('./gql/mutationLogout.graphql');

export const useLogout = () => {
  const [_logout, { error }] = useMutation(mutationLogout);
  const history = useHistory();

  const logout = () => {
    _logout()
      .then(({data}) => {
        if (data) {
          history.push(book.login);
        }
      })
      .catch(({message}) => {
      console.error(message);
    });
  };

  return {
    error,
    logout
  }
}
