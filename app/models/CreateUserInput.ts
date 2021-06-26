import { InputType, Field } from "type-graphql";

@InputType()
export class CreateUserInput {


  @Field(() => String)
  userName!: string;

  @Field(() => String)
  firstName!: string;

  @Field(() => String)
  lastName!: string;

  @Field(() => Date)
  birthDate!: Date;
}
