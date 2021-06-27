import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class PhemexPositionAccount {
  @Field()
  userID: number;
  @Field()
  accountId: number;
  @Field()
  currency: string;
  @Field()
  accountBalanceEv: number;
  @Field()
  totalUsedBalanceEv: number;
  @Field()
  bonusBalanceEv: number;
}
