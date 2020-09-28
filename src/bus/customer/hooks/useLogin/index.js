// Core
import { loader } from 'graphql.macro';
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';

// Book
import { book } from '../../../../navigation/book';

// Mutations
const mutationLogin = loader('./gql/mutationLogin.graphql');

export const useLogin = () => {
    const [_login, { error }] = useMutation(mutationLogin);
    const history = useHistory();

    const authenticate = async (customer) => {
        try {
            const { data } = await _login({
                variables: {
                    customer
                }
            });

            if (data) {
                history.push(book.tasks);
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    return {
        error,
        authenticate,
    }
}
