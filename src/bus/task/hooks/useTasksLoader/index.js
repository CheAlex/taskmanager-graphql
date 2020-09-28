// Core
import { loader } from 'graphql.macro';
import { useQuery } from '@apollo/react-hooks';

// Queries
const queryTasks = loader('./gql/queryTasks.graphql');

export const useTasksLoader = () => {
  const { data, loading, refetch } = useQuery(queryTasks);

  return {
    loading,
    refetch,
    tasks: data && data.tasks
  }
}
