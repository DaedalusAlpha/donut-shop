import { Component, OnInit } from '@angular/core';
import { CartItem, DonutDetail } from 'src/app/models/donut';
import { DonutService } from 'src/app/services/donut.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: CartItem[] = [];

  constructor(private donutService: DonutService) {}

  ngOnInit(): void {
    this.cart = this.donutService.getCart();
  }

  removeOneFromCart(donut: CartItem): void {
    this.donutService.removeOneFromCart(donut);
  }

  removeAllFromCart(donut: CartItem): void {
    this.donutService.removeAllFromCart(donut);
  }

  getCartTotals(): number[] {
    return this.donutService.getCartTotals(this.cart);
  }

  addOneMore(donut: DonutDetail): void {
    this.donutService.addToCart(donut);
  }
}
