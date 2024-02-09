// Module to create a wrapped schema
const { wrapSchema } = require('@graphql-tools/wrap');
const { getIntrospectionQuery, buildClientSchema, print } = require('graphql');
const { executeGraphQLRequest } = require('../utils/dataFetcher');

const createWrappedSchema = async (url) => {
  try {
    const introspectionResult = await getIntrospectionResult(url);

    // Create a wrapped schema with the introspection result and a fetcher function
    const wrappedSchema = wrapSchema({
      schema: buildClientSchema(introspectionResult.data),
      executor: async ({ document, variables }) => {
        const query = print(document);
        const response = await executeGraphQLRequest(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query,
            variables,
          }),
        });
        return response.json();
      },
    });

    return wrappedSchema;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Helper function to get introspection result from a URL
const getIntrospectionResult = async (url) => {
  const res = await executeGraphQLRequest(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getIntrospectionQuery(),
    }),
  });

  return res.json();
};

module.exports = {
  createWrappedSchema,
};