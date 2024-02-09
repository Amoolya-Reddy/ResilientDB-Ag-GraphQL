// Starting the server
const createServer = require('./server');

createServer().then((server) => {
  server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
  });
});
