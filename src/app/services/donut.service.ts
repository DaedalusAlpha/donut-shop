import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartItem, Donut, DonutDetail } from '../models/donut';

@Injectable({
  providedIn: 'root',
})
export class DonutService {
  private apiURL: string = 'https://grandcircusco.github.io/demo-apis/donuts';
  private donutCart: CartItem[] = [];

  constructor(private httpClient: HttpClient) {}

  //Get basic donut info from API
  fetchDonuts(): Observable<Donut> {
    return this.httpClient.get<Donut>(this.apiURL + '.json');
  }

  //Get donut details from API based on donut ID
  fetchDonutDetails(id: number): Observable<DonutDetail> {
    return this.httpClient.get<DonutDetail>(this.apiURL + '/' + id + '.json');
  }

  //Return the cart as an array of CartItems
  getCart(): CartItem[] {
    return this.donutCart;
  }

  //Add the donut to the cart. If it is already in the cart,
  //increase its quantity by one instead.
  addToCart(donut: DonutDetail): void {
    if (this.donutCart.some((d) => d.donut.id == donut.id)) {
      this.donutCart[this.findDonut(donut)].quantity += 1;
    } else {
      let newItem: CartItem = { donut: donut, quantity: 1 };
      this.donutCart.push(newItem);
    }
  }

  //Remove an entire cart item (donut and quantity) from the cart
  removeAllFromCart(donut: CartItem): void {
    this.donutCart.splice(this.findDonut(donut.donut), 1);
  }

  //Reduce the quantity of an item in the cart. If its quantity
  //is 1, instead remove the entire item from the cart.
  removeOneFromCart(donut: CartItem): void {
    let q = this.donutCart[this.findDonut(donut.donut)].quantity;
    if (q > 1) {
      this.donutCart[this.findDonut(donut.donut)].quantity -= 1;
    } else {
      this.removeAllFromCart(donut);
    }
  }

  //Find a donut in the cart by its id.
  findDonut(donut: DonutDetail): number {
    return this.donutCart.findIndex((d) => d.donut.id == donut.id);
  }

  //Return an array containing the total quantity and total
  //calories for all CartItems in the cart.
  getCartTotals(cart: CartItem[]): number[] {
    let totalQuantity: number = 0;
    let totalCalories: number = 0;
    cart.forEach((d) => {
      totalQuantity += d.quantity;
      totalCalories += d.donut.calories * d.quantity;
    });
    return [totalQuantity, totalCalories];
  }
}
