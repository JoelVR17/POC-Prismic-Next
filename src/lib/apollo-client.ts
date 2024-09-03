// lib/apollo-client.ts
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://swapi-graphl.azure-api.net/graphql-joel",
  cache: new InMemoryCache(),
});

export default client;
