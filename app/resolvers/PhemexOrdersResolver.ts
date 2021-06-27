import { PhemexApi } from '../apis/PhemexApi';
import { Arg, Query, Resolver } from 'type-graphql';
import { PhemexOrderResponse } from '../models/PhemexOrderResponse';

@Resolver()
export class PhemexOrdersResolver {
  @Query(() => PhemexOrderResponse)
  async getOrders(@Arg('limit') limit: number, @Arg('offset') offset: number): Promise<PhemexOrderResponse> {
    let phemexApi = new PhemexApi();
    let orders = await phemexApi.getOrders(limit, offset);
    return orders;
  }
}
