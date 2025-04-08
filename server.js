const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

console.log("MONGO_URI:", process.env.MONGO_URI);

const typeDefs = require('./schema');
const resolvers = require('./resolvers');

async function startServer() {
  const app = express();
  app.use(cors());
  app.use(express.json());

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req }),
  });

  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  }

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server ready at http://0.0.0.0:${PORT}${server.graphqlPath}`);
  });
}

startServer();
