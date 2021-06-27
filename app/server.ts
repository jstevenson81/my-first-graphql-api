import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { ApolloServer } from 'apollo-server';
import { UserResolver } from './resolvers/User';
import { SessionResolver } from './resolvers/Sessions';
import { buildSchema } from 'type-graphql';
import { PhemexOrdersResolver } from './resolvers/PhemexOrdersResolver';
import { PhemexPositionsResolver } from './resolvers/PhemexPositionsResolver';

async function main() {
  await createConnection();
  const schema = await buildSchema({
    resolvers: [UserResolver, SessionResolver, PhemexOrdersResolver, PhemexPositionsResolver],
  });
  const server = new ApolloServer({ schema });
  await server.listen(4000);
  console.log('Server has started!');
};

main();