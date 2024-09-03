import { gql } from "@apollo/client";

export const GET_ITEMS = gql`
  query GetItems {
    items {
      id
      name
    }
  }
`;

export const CREATE_ITEM = gql`
  mutation CreateItem($name: String!) {
    createItem(name: $name) {
      id
      name
    }
  }
`;

export const UPDATE_ITEM = gql`
  mutation UpdateItem($id: ID!, $name: String!) {
    updateItem(id: $id, name: $name) {
      id
      name
    }
  }
`;

export const DELETE_ITEM = gql`
  mutation DeleteItem($id: ID!) {
    deleteItem(id: $id) {
      id
    }
  }
`;
