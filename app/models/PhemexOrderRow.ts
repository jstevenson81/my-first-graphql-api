import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class PhemexOrderRow {
  @Field()
  transactTimeNs: number;
  @Field()
  symbol: string;
  @Field()
  currency: string;
  @Field()
  action: string;
  @Field()
  side: string;
  @Field()
  tradeType: string;
  @Field()
  execQty: number;
  @Field()
  execPriceEp: number;
  @Field()
  orderQty: number;
  @Field()
  priceEp: number;
  @Field()
  execValueEv: number;
  @Field()
  feeRateEr: number;
  @Field()
  execFeeEv: number;
  @Field()
  closedSize: number;
  @Field()
  closedPnlEv: number;
  @Field()
  ordType: string;
  @Field()
  execID: string;
  @Field()
  orderID: string;
  @Field()
  clOrdID: string;
  @Field()
  execStatus: string;
}
