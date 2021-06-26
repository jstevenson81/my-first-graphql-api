import { Resolver, Query, Arg, Mutation } from 'type-graphql';
import { CreateUserInput } from '../models/CreateUserInput';
import { User } from '../models/User';

@Resolver()
export class UserResolver {
  @Query(() => [User])
  users() {
    return User.find();
  }

  @Query(() => [User])
  userByFirstName(@Arg('firstName') firstName: string) {
    return User.find({ where: { firstName: firstName } });
  }

  @Mutation(() => User)
  async createUser(@Arg('data') data: CreateUserInput) {
    const user = User.create(data);
    await user.save();
    return user;
  }
}
