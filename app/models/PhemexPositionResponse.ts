import { Field, ObjectType } from 'type-graphql';
import { PhemexPositionData } from './PhemexPositionData';

@ObjectType()
export class PhemexPositionResponse {
  @Field()
  code: number;
  @Field()
  msg: string;
  @Field(() => PhemexPositionData)
  data: PhemexPositionData;
}
