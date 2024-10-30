// Imports required Node.js Modules
const { GraphQLError } = require("graphql");
const jwt = require("jsonwebtoken");

// Imports required App Modules
// const secret = "mysecretsshhhhh";
const jwtSecret = process.env.JWT_SECRET;
const expiration = "1h";

module.exports = {
  AuthenticationError: new GraphQLError("User could not be authenticated.", {
    extensions: {
      code: "UNAUTHENTICATED",
    },
  }),
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log("authorize.js Line 33: Invalid token");
      // console.log("Invalid token");
    }

    return req;
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};