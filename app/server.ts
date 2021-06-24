import { ApolloServer } from "apollo-server-express";
import Express from "express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { connect } from "mongoose";

// resolvers
import {UserResolver} from "./resolvers/User";
import {SessionResolver} from "./resolvers/Sessions";


const main = async () => {
const schema = await buildSchema({
    resolvers: [UserResolver, SessionResolver ],
    emitSchemaFile: true,
    validate: false,
  });

const server = new ApolloServer({schema});
const app = Express();
server.applyMiddleware({app});
app.listen({ port: 3333 }, () =>
  console.log(`🚀 Server ready and listening at ==> http://localhost:3333${server.graphqlPath}`))
};
main().catch((error)=>{
    console.log(error, 'error');
})