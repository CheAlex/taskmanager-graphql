// Core
import { loader } from 'graphql.macro';
import { useMutation } from '@apollo/react-hooks';

// Mutations
const mutationUpdateTask = loader('./gql/mutationUpdateTask.graphql');

export const useTaskUpdater = () => {
    const [_update] = useMutation(mutationUpdateTask);

    const updateTask = (id, task, next) => {
        _update({
            variables: {
                id,
                task
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
        updateTask,
    }
}
