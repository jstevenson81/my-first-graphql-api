import { Field, ObjectType } from 'type-graphql';
import { PhemexOrderRow } from './PhemexOrderRow';

@ObjectType()
export class PhemexOrderCollection {
  @Field()
  total: number;
  @Field((type) => [PhemexOrderRow])
  rows: PhemexOrderRow[];
}
