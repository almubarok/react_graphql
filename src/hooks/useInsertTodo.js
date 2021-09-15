import { useMutation } from '@apollo/client';
import { GetTodolist } from 'graphql/query';
import { InsertTodo } from 'graphql/mutation';

export default function useInsertTodo() {
  const [insertTodo, { loading: loadingInsert }] = useMutation(InsertTodo, {
    refetchQueries: [GetTodolist],
  });

  return {
    insertTodo,
    loadingInsert,
  };
}
