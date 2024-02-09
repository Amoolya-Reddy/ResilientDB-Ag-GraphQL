// Helper function related to fetching data
const fetch = require('node-fetch');

const executeGraphQLRequest = async (url, options) => {
  try {
    const response = await fetch(url, options);
    return response;
  } catch (error) {
    console.error("Error while fetching", error);
    throw error;
  }
};

module.exports = {
  executeGraphQLRequest,
};
