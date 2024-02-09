// src/server/index.js
const { ApolloServer } = require('apollo-server');
const { createStitchedSchema } = require('../schemas/productFilter/stitchedSchema');

// Function to create the Apollo server with the stitched schema
const createServer = async () => {
  const schema = await createStitchedSchema();
  const server = new ApolloServer({ schema, introspection: true });
  return server;
};

module.exports = createServer;
