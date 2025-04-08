const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); // ✅ Enable CORS

dotenv.config(); // Load environment variables

console.log("MONGO_URI:", process.env.MONGO_URI); // Debugging: Ensure MONGO_URI is loaded

const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const startServer = async () => {
  const app = express();

  app.use(cors()); // ✅ Allow cross-origin requests from frontend
  app.use(express.json()); // Ensure JSON parsing for requests

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req }),
  });

  await server.start();
  server.applyMiddleware({ app });

  // Connect to MongoDB
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch((err) => {
      console.error('❌ MongoDB connection error:', err);
      process.exit(1);
    });

  // ✅ Use Render's dynamic port and bind to 0.0.0.0
  const PORT = process.env.PORT || 4000;

  app.lis