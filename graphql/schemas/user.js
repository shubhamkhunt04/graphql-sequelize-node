const { gql } = require("apollo-server-express");

module.exports = gql`
  type User {
    id: Int!
    name: String!
    email: String!
    password: String!
    posts: [Post!]
  }

  type RegisterResponse {
    id: Int!
    name: String!
    email: String!
  }

  input RegisterInput {
    name: String!
    email: String!
    password: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  type LoginResponse {
    id: Int!
    name: String!
    email: String!
    token: String!
  }

  extend type Mutation {
    register(input: RegisterInput!): RegisterResponse
    login(input: LoginInput!): LoginResponse
  }
`;
