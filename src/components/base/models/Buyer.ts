import { IBuyer, TBuyerErrors, TPayment } from "../../../types";

export class Buyer {
  protected payment: TPayment = "";
  protected email = "";
  protected phone = "";
  protected address = "";

  setPayment(payment: TPayment): void {
    this.payment = payment;
  }

  setAddress(address: string): void {
    this.address = address;
  }

  setContacts(email: string, phone: string): void {
    this.email = email;
    this.phone = phone;
  }

  getData(): IBuyer {
    return {
      payment: this.payment,
      email: this.email,
      phone: this.phone,
      address: this.address,
    };
  }

  clear(): void {
    this.payment = "";
    this.email = "";
    this.phone = "";
    this.address = "";
  }

  validate(): TBuyerErrors {
    const errors: TBuyerErrors = {};

    if (!this.payment) {
      errors.payment = "Не выбран вид оплаты";
    }

    if(!this.address.trim()) {
      errors.address = "Укажите адрес";
    }

    if (!this.email) {
      errors.email = "Укажите email";
    }

    if (!this.phone) {
      errors.phone = "Укажите телефон";
    }

    return errors;
  }
}
