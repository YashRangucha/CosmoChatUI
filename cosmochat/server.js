// Import the 'json-server' package/module and assign it to the variable 'jsonServer'.
const jsonServer = require("json-server");
// Version: json-server@^0.17.3

// Create a new instance of the JSON Server and assign it to the variable 'server'.
const server = jsonServer.create();


const router = jsonServer.router("data/db.json");

const middlewares = jsonServer.defaults();

const port = process.env.PORT || 3500;

server.use(middlewares);

server.use(router);

server.listen(port, function () {
    console.log(`JSON Server is running on port ${port}.`);
})

//end