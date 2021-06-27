import { PhemexPositionResponse } from '../models/PhemexPositionResponse';
import { Query, Resolver } from 'type-graphql';
import { PhemexApi } from '../apis/PhemexApi';

@Resolver()
export class PhemexPositionsResolver {
  @Query(() => PhemexPositionResponse)
  async getPositions(): Promise<PhemexPositionResponse> {
    let phemexApi = new PhemexApi();
    let positions = await phemexApi.getPositions();
    return positions;
  }
}
