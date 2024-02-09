// Schema difference for the addition of new API to filter by product name

const { gql } = require('apollo-server');

const productFilterQuery = gql`
  extend type Query {
    getProductStages(productName: String!): [Transaction]
  }

  type Transaction {
    id: ID!
    version: Float!
    metadata: String!
    operation: String!
    asset: String!
    publicKey: String!
    uri: String!
    type: String!
  }
`;

module.exports = productFilterQuery;