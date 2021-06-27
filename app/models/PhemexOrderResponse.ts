import { Field, ObjectType } from 'type-graphql';
import { PhemexOrderCollection } from './PhemexOrderCollection';

@ObjectType()
export class PhemexOrderResponse {
  @Field()
  code: number;
  @Field()
  msg: string;
  @Field((type) => PhemexOrderCollection)
  data: PhemexOrderCollection;
}
