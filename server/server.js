// Module 21 - Challenge: Book Search Engine
// Express Server (Backend) Definition

// Initialize Server from /server
// Node: npm start
// Dev: npm run dev

// Concurrently Initialize: npm run develop

// Test Accounts
// User Name: Kyle
// Email: kyle.a.chen@icloud.com
// Pasword: password

// User Name: sample
// Email: sample@email.com
// Pasword:password

// Imports required Node.js Modules
const express = require("express");
const path = require("path");

// Imports Apollo Server Middleware
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");

// Imports MongoDB Connection from Configuration file (./config/connect.js)
const db = require("./config/connect.js");

// Imports GraphQL Schema
const { typeDefs, resolvers } = require("./schemas");

// Import Authentication Middleware, JSON Web Token (JWT)
const { authMiddleware } = require("./utils/auth.js");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Executes Express Function to Create Application Object (app) using Express Framework
const app = express();

// Defines Global App Variables
// Local Host: http://localhost:3001
const PORT = process.env.PORT || 3001;

// Establishes connection to local MongoDB Instance through Configuration file (./config/connect.js)
db.on(
  "error",
  console.error.bind(
    console,
    "server.js Line 42: Unable to connect to MongoDB Instance:"
  )
);

db.once("open", () => {
  console.log("server.js Line 42: Connection established to MongoDB Instance");
});

// GraphQL Entry Point through Apollo Server
const startApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use(
    "/graphql",
    expressMiddleware(server, {
      context: authMiddleware,
    })
  );

  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/dist")));

    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../client/dist/index.html"));
    });
  }

  // ORIGINAL CODE >>>
  // db.once("open", () => {
  //   app.listen(PORT, () => {
  //     console.log(`API server running on port ${PORT}!`);
  //     console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
  //   });
  // });
  // <<< ORIGINAL CODE
};

// Starts Apollo Server
startApolloServer();

app.listen(PORT, () => {
  console.log(
    `server.js Line 93: Book Search Engine App Express Server (Backend) is listing on Port ${PORT}.`
  );
  console.log(
    `server.js Line 96: GraphQL is available at http://localhost:${PORT}/graphql`
  );
});
