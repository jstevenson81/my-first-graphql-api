import { Resolver, Query } from 'type-graphql';

@Resolver()
export class SessionResolver {
  @Query(() => String)
  hello() {
    return 'I am the session resolver';
  }
}
