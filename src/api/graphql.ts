// pages/api/graphql.ts
import { ApolloServer, gql } from "apollo-server-micro";
import { NextApiRequest, NextApiResponse } from "next";

// Define your type definitions and resolvers
const typeDefs = gql`
  type Query {
    hello: String
    items: [Item]
  }
  type Mutation {
    createItem(name: String!): Item
  }
  type Item {
    id: ID!
    name: String!
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello world!",
    items: () => [
      { id: "1", name: "Item 1" },
      { id: "2", name: "Item 2" },
    ],
  },
  Mutation: {
    createItem: (parent: any, args: { name: string }) => {
      // Implement your mutation logic here
      return { id: "3", name: args.name };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Export the handler
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // Convert Next.js req/res to Apollo Server's
  const handler = server.createHandler({ path: "/api/graphql" });
  return handler(req, res);
};
