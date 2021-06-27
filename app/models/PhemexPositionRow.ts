import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class PhemexPositionRow {
  @Field()
  userID: number;
  @Field()
  accountID: number;
  @Field()
  symbol: string;
  @Field()
  currency: string;
  @Field()
  side: string;
  @Field()
  positionStatus: string;
  @Field()
  crossMargin: boolean;
  @Field()
  leverageEr: number;
  @Field()
  leverage: number;
  @Field()
  initMarginReqEr: number;
  @Field()
  initMarginReq: number;
  @Field()
  maintMarginReqEr: number;
  @Field()
  maintMarginReq: number;
  @Field()
  riskLimitEv: number;
  @Field()
  riskLimit: number;
  @Field()
  size: number;
  @Field()
  value: number;
  @Field()
  valueEv: number;
  @Field()
  avgEntryPriceEp: number;
  @Field()
  avgEntryPrice: number;
  @Field()
  posCostEv: number;
  @Field()
  posCost: number;
  @Field()
  assignedPosBalanceEv: number;
  @Field()
  assignedPosBalance: number;
  @Field()
  bankruptCommEv: number;
  @Field()
  bankruptComm: number;
  @Field()
  bankruptPriceEp: number;
  @Field()
  bankruptPrice: number;
  @Field()
  positionMarginEv: number;
  @Field()
  positionMargin: number;
  @Field()
  liquidationPriceEp: number;
  @Field()
  liquidationPrice: number;
  @Field()
  deleveragePercentileEr: number;
  @Field()
  deleveragePercentile: number;
  @Field()
  buyValueToCostEr: number;
  @Field()
  buyValueToCost: number;
  @Field()
  sellValueToCostEr: number;
  @Field()
  sellValueToCost: number;
  @Field()
  markPriceEp: number;
  @Field()
  markPrice: number;
  @Field()
  markValueEv: number;
  @Field()
  markValue?: number;
  @Field()
  unRealisedPosLossEv: number;
  @Field()
  unRealisedPosLoss?: number;
  @Field()
  estimatedOrdLossEv: number;
  @Field()
  estimatedOrdLoss: number;
  @Field()
  usedBalanceEv: number;
  @Field()
  usedBalance: number;
  @Field()
  takeProfitEp: number;
  @Field()
  takeProfit?: number;
  @Field()
  stopLossEp: number;
  @Field()
  stopLoss?: number;
  @Field()
  cumClosedPnlEv: number;
  @Field()
  cumFundingFeeEv: number;
  @Field()
  cumTransactFeeEv: number;
  @Field()
  realisedPnlEv: number;
  @Field()
  realisedPnl?: number;
  @Field()
  cumRealisedPnlEv: number;
  @Field()
  cumRealisedPnl?: number;
  @Field()
  transactTimeNs: number;
}
