import { Component, OnInit } from '@angular/core';
import { CartItem } from './models/donut';
import { DonutService } from './services/donut.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'donut-shop';

  constructor(private donutService: DonutService) {}

  cart: CartItem[] = [];

  ngOnInit(): void {
    this.cart = this.donutService.getCart();
  }

  getTotalCartQuantity(): number {
    return this.donutService.getCartTotals(this.cart)[0];
  }
}
