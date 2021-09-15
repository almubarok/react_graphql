import { gql } from '@apollo/client';

export const GetTodolist = gql`
  query MyQuery {
    todolist {
      is_done
      id
      title
    }
  }
`;
