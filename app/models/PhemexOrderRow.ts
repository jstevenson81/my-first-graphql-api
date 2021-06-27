/*
{
    "code": 0,
    "msg": "OK",
    "data": {
        "total": 1429,
        "rows": [
        {
          "transactTimeNs": 1624478703990998317,
          "symbol": "BTCUSD",
          "currency": "BTC",
          "action": "New",
          "side": "Sell",
          "tradeType": "Trade",
          "execQty": 5345,
          "execPriceEp": 327680000,
          "orderQty": 36810,
          "priceEp": 326425000,
          "execValueEv": 16311645,
          "feeRateEr": 75000,
          "execFeeEv": 12234,
          "closedSize": 5345,
          "closedPnlEv": -392063,
          "ordType": "Stop",
          "execID": "3c8126c2-e16d-545d-8b44-cd22a6b9e11d",
          "orderID": "bb57920b-3b12-43db-bc3a-c211e26c96cf",
          "clOrdID": "554aau3w-ck44-1vvo-mpeg-zmav3r47xern",
          "execStatus": "TakerFill"
        }]
    }
}
*/

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
