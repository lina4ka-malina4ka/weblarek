import "./scss/styles.scss";

import { Products } from "./components/base/models/Products";
import { Basket } from "./components/base/models/Basket";
import { Buyer } from "./components/base/models/Buyer";
import { apiProducts } from "./utils/data";
import { Api } from "./components/base/Api";
import { WebLarekApi } from "./components/base/WebLarekApi";
import { API_URL } from "./utils/constants";

const productsModel = new Products();

productsModel.setItems(apiProducts.items);

console.log("Массив товаров из каталога:", productsModel.getItems());

const firstProduct = productsModel.getItems()[0];

console.log("Первый товар:", firstProduct);
console.log("Товар по id:", productsModel.getItem(firstProduct.id));

productsModel.setPreview(firstProduct);
console.log("Товар для подробного просмотра:", productsModel.getPreview());

const basketModel = new Basket();

basketModel.addItem(firstProduct);

console.log("Товары в корзине:", basketModel.getItems());
console.log("Количество товаров в корзине:", basketModel.getCount());
console.log("Сумма корзины:", basketModel.getTotal());
console.log("Есть ли товар в корзине:", basketModel.hasItem(firstProduct.id));

basketModel.removeItem(firstProduct.id);
console.log("Корзина после удаления:", basketModel.getItems());

const buyerModel = new Buyer();

console.log("Ошибки до заполнения:", buyerModel.validate());

buyerModel.setPayment("card");
buyerModel.setAddress("Ташкент");
buyerModel.setContacts("test@mail.com", "+998901234567");

console.log("Данные покупателя:", buyerModel.getData());
console.log("Ошибки после заполнения:", buyerModel.validate());

const api = new Api(API_URL);
const webLarekApi = new WebLarekApi(api);

webLarekApi.getProducts()
  .then((response) => {
    productsModel.setItems(response.items);

    console.log(
      'Сервер: товары получены и сохранены в модель Products:',
      productsModel.getItems()
    );
  })
  .catch((error) => {
    console.error('Сервер: ошибка при получении товаров:', error);
  });