// Core
import { loader } from 'graphql.macro';
import { useMutation } from '@apollo/react-hooks';

// Mutations
const mutationRemoveAllTasks = loader('./gql/mutationRemoveAllTasks.graphql');

export const useTasksCleaner = () => {
    const [_remove] = useMutation(mutationRemoveAllTasks);

    const removeAllTasks = () => {
        _remove()
            .catch(({message}) => {
                console.error(message);
            })
        ;
    };

    return {
        removeAllTasks,
    }
}
