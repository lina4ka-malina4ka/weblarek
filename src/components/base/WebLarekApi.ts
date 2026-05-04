import type {
  IApi,
  IOrder,
  IOrderResult,
  IProductsResponse,
} from "../../types";

export class WebLarekApi {
  constructor(protected api: IApi) {}

  getProducts(): Promise<IProductsResponse> {
    return this.api.get<IProductsResponse>("/product/");
  }

  orderProducts(order: IOrder): Promise<IOrderResult> {
    return this.api.post<IOrderResult>("/order/", order);
  }
}
