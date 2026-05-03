import { Api } from "./Api";
import { IOrder, IOrderResult, IProduct, IProductsResponse } from "../../types";

export class WebLarekApi {
  constructor(protected api: Api) {}

  getProducts(): Promise<IProduct[]> {
    return this.api.get("/product/").then((data) => {
      const response = data as IProductsResponse;
      return response.items;
    });
  }

  orderProducts(order: IOrder): Promise<IOrderResult> {
    return this.api.post("/order/", order).then((data) => {
      const response = data as IOrderResult;
      return response;
    });
  }
}
