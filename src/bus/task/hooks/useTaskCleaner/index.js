// Core
import { loader } from 'graphql.macro';
import { useMutation } from '@apollo/react-hooks';

// Mutations
const mutationRemoveTask = loader('./gql/mutationRemoveTask.graphql');

export const useTaskCleaner = () => {
    const [_remove] = useMutation(mutationRemoveTask);

    const removeTask = (id, next) => {
        _remove({
            variables: {
                id
            }
        })
            .then(() => {
                next();
            })
            .catch(({message}) => {
                console.error(message);
            })
        ;
    };

    return {
        removeTask,
    }
}
