import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Donut, DonutDetail, Result } from '../models/donut';

@Injectable({
  providedIn: 'root',
})
export class DonutService {
  private apiURL: string = 'https://grandcircusco.github.io/demo-apis/donuts';
  private donutCart: DonutDetail[] = [];

  constructor(private httpClient: HttpClient) {}

  fetchDonuts(): Observable<Donut> {
    return this.httpClient.get<Donut>(this.apiURL + '.json');
  }

  fetchDonutDetails(id: number): Observable<DonutDetail> {
    return this.httpClient.get<DonutDetail>(this.apiURL + '/' + id + '.json');
  }

  getCart(): DonutDetail[] {
    return this.donutCart;
  }

  addToCart(donut: DonutDetail): void {
    this.donutCart.push(donut);
  }

  removeFromCart(donut: DonutDetail): void {
    this.donutCart.splice(
      this.donutCart.findIndex((d) => d.id == donut.id),
      1
    );
  }
}
