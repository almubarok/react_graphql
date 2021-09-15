import { useMutation } from '@apollo/client';
import { GetTodolist } from 'graphql/query';
import { DeleteTodo } from 'graphql/mutation';

export default function useDeleteTodo() {
  const [deleteTodo, { loading: loadingDelete }] = useMutation(DeleteTodo, {
    refetchQueries: [GetTodolist],
  });

  return {
    deleteTodo,
    loadingDelete,
  };
}
