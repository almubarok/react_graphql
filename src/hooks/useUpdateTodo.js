import { useMutation } from '@apollo/client';
import { GetTodolist } from 'graphql/query';
import { UpdateTodo } from 'graphql/mutation';

export default function useUpdateTodo() {
  const [updateTodo, { loading: loadingUpdate }] = useMutation(UpdateTodo, {
    refetchQueries: [GetTodolist],
  });

  return {
    updateTodo,
    loadingUpdate,
  };
}
