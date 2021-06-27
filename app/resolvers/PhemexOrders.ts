import { Query, Resolver } from "type-graphql";
import { PhemexOrderResponse } from "../models/PhemexOrderResponse";


@Resolver()
export class PhemexOrdersResolver {

  @Query(() => PhemexOrderResponse)
  getOrders() {
    
  }

}