import gql from "graphql-tag";

export const insertUsers = gql`
  mutation($id: String, $name: String, $username: String) {
    insert_users(objects: [{ id: $id, email: $name, username: $username }]) {
      affected_rows
    }
  }
`;