import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DonutDetail } from './models/donut';
import { DonutService } from './services/donut.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'donut-shop';

  constructor(
    private route: ActivatedRoute,
    private donutService: DonutService
  ) {}

  cart: DonutDetail[] = [];

  ngOnInit(): void {
    this.cart = this.donutService.getCart();
  }

  getCartSize(): number {
    return this.cart.length;
  }
}
