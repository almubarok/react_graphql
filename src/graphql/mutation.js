import { gql } from '@apollo/client';

export const UpdateTodo = gql`
  mutation MyMutation($id: Int!, $is_done: Boolean) {
    update_todolist_by_pk(
      pk_columns: { id: $id }
      _set: { is_done: $is_done }
    ) {
      id
    }
  }
`;

export const DeleteTodo = gql`
  mutation MyMutation($id: Int!) {
    delete_todolist_by_pk(id: $id) {
      id
    }
  }
`;

export const InsertTodo = gql`
  mutation MyMutation($object: todolist_insert_input!) {
    insert_todolist_one(object: $object) {
      id
    }
  }
`;
