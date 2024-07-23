import { ApolloServer, gql } from "apollo-server";
import { taskResolvers } from "./resolvers/taskResolver";
import * as fs from "fs";
import * as path from "path";

const typeDefs = gql(
  fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf8")
);

const resolvers = {
  Query: {
    ...taskResolvers,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
