// Module to create the stitched schema
const { stitchSchemas } = require('@graphql-tools/stitch');
const { createResolvers } = require('./resolver');
const { createWrappedSchema } = require('../schemaWrapper');
const productFilterQuery = require('./productFilterQuery');
const appConfig = require('../../utils/appConfig');

const createStitchedSchema = async () => {
  const transactionWrappedSchema = await createWrappedSchema(appConfig.transactionApiUrl);
  const stitchedSchema = stitchSchemas({
    subschemas: [transactionWrappedSchema],
    typeDefs: productFilterQuery,
    resolvers: createResolvers(transactionWrappedSchema),
  });

  return stitchedSchema;
};

module.exports = {
  createStitchedSchema,
};
