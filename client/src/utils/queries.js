// import { gql } from "@apollo/client";

// export const QUERY_ME = gql`
//   {
//     me {
//       _id
//       username
//       email
//       savedBooks {
//         bookId
//         authors
//         image
//         description
//         title
//         link
//       }
//     }
//   }
// `;

// export const NEW_USER = gql`
//   mutation newUser($username: String!, $email: String!, $password: String!) {
//     newUser(userName: $userName, email: $email, password: $password) {
//       token
//       user {
//         _id
//         username
//       }
//     }
//   }
// `;

// export const LOGIN = gql`
//   mutation login($email: String!, $password: String!) {
//     login(email: $email, password: $password) {
//       token
//       user {
//         _id
//         username
//       }
//     }
//   }
// `;

import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        image
        description
        title
        link
      }
    }
  }
`;
