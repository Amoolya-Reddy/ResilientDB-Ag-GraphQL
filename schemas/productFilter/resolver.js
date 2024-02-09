// Function to create resolver for project filter
const { delegateToSchema } = require("@graphql-tools/delegate");

const createResolvers = (transactionWrappedSchema) => ({
  Query: {
    getProductStages: {
      resolve: async (parent, args, context, info) => {
        const transactions = await delegateToSchema({
          schema: transactionWrappedSchema,
          operation: "query",
          fieldName: "getFilteredTransactions",
          args: {
            filter: {
              ownerPublicKey: "",
              recipientPublicKey: "",
            },
          },
          context,
          info,
        });
        console.log(transactions, args.productName);
        if (args.productName) {
          return transactions.filter((transaction) =>
            JSON.parse(transaction.asset.replace(/'/g, '"')).data[
              "Industry"
            ].includes(args.productName)
          );
        }

        return transactions;
      },
    },
  },
});

module.exports = {
  createResolvers,
};
