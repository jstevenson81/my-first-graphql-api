import { Field, ObjectType } from 'type-graphql';
import { PhemexPositionRow } from './PhemexPositionRow';
import { PhemexPositionAccount } from './PhemexPositionAccount';

@ObjectType()
export class PhemexPositionData {
  @Field(() => PhemexPositionAccount)
  account: PhemexPositionAccount;
  @Field(() => [PhemexPositionRow])
  positions: PhemexPositionRow[];
}
