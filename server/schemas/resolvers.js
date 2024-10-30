// Imports required Node.js Modules
const { signToken, AuthenticationError } = require("../utils/auth");

// Imports required App Modules
const { User, Book } = require("../models");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );

        return userData;
      }

      throw AuthenticationError;
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      // Identifies Existing User through Email search
      const user = await User.findOne({ email });

      // Throws Authentication Error if Existing User is not found with entered Email
      if (!user) {
        throw AuthenticationError;
      }

      // Executes Validate Password Method (User.js)
      const correctPw = await user.isCorrectPassword(password);

      // Throws Authentication Error if Password is incorrect
      if (!correctPw) {
        throw AuthenticationError;
      }

      // Logs In Existing User if User Name and Password are both correct
      const token = signToken(user);

      // Returns Authorization Object of 'token' and User credentials
      return { token, user };
    },
    saveBook: async (parent, { bookData }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { savedBooks: bookData } },
          { new: true }
        );

        return updatedUser;
      }

      throw AuthenticationError;
    },
    removeBook: async (parent, { bookId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: { bookId } } },
          { new: true }
        );

        return updatedUser;
      }

      throw AuthenticationError;
    },
  },
};

module.exports = resolvers;
