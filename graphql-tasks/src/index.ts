import { ApolloServer, gql } from "apollo-server";
import { taskResolvers } from "./resolvers/taskResolver";
import * as fs from "fs";
import * as path from "path";

// TODO