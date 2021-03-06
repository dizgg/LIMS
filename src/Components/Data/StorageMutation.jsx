import gql from 'graphql-tag';

export const ADD_STORAGE = gql`
  mutation createStorage(
    $name: String!,
    $description: String!,
    $container: Int!
    $cssIcon: String!)
    {
      createStorage(
        name: $name,
        description: $description,
        container: $container,
        cssIcon: $cssIcon,) {
          name
          description
          container
          cssIcon
        }
    }
`;

export const DELETE_STORAGE = gql`
  mutation deleteStorage($id: int!)
    {
      deleteStorage(id: $id) {
        id
        deleted
      }
    }
`;
