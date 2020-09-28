// Core
import { loader } from 'graphql.macro';
import { useMutation } from '@apollo/react-hooks';

// Mutations
const mutationAddTask = loader('./gql/mutationAddTask.graphql');

export const useTaskCreator = () => {
    const [_add, { error }] = useMutation(mutationAddTask);

    const createTask = (task, next) => {
        _add({
            variables: {
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
        createTask,
        error
    }
}
