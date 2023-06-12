import { gql } from '@apollo/client';

export const ADD_KITTIES = gql`
mutation mutateKitties($name: String!, $breed: String!, $age: Int!, $gender: String!, $color: String!, $declawed: Boolean!) {
    addKitty(name: $name, breed: $breed, age: $age, gender: $gender, color: $color, declawed: $declawed) {
      trauma
      name
      gender
      declawed
      color
      breed
      age
      _id
    }
  }
`;

  