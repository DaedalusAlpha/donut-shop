import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DonutDetail } from 'src/app/models/donut';
import { DonutService } from 'src/app/services/donut.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartContents: DonutDetail[] = [];

  constructor(
    private route: ActivatedRoute,
    private donutService: DonutService
  ) {}

  ngOnInit(): void {
    this.cartContents = this.donutService.getCart();
  }

  removeFromCart(donut: DonutDetail): void {
    this.donutService.removeFromCart(donut);
  }

  getTotalCalories(): number {
    let sum: number = 0;
    this.cartContents.forEach((d) => {
      sum += d.calories;
    });
    return sum;
  }
}
