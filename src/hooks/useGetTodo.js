import { useQuery } from '@apollo/client';
import { GetTodolist } from 'graphql/query';
import { SubscriptionTodo } from 'graphql/subscribe';

export default function useGetTodo() {
  const { data, loading, error, subscribeToMore } = useQuery(GetTodolist);

  const subcribeTodo = () => {
    subscribeToMore({
      document: SubscriptionTodo,
      updateQuery: (prev, { subscriptionData: { data } }) => {
        return data;
      },
    });
  };

  return {
    todolist: data ? data.todolist : [],
    loading,
    error,
    subcribeTodo,
  };
}
