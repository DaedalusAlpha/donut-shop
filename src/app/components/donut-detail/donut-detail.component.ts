import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DonutDetail } from 'src/app/models/donut';
import { DonutService } from 'src/app/services/donut.service';

@Component({
  selector: 'app-donut-detail',
  templateUrl: './donut-detail.component.html',
  styleUrls: ['./donut-detail.component.css'],
})
export class DonutDetailComponent implements OnInit {
  displayDonut: DonutDetail = {} as DonutDetail;

  constructor(
    private route: ActivatedRoute,
    private donutService: DonutService
  ) {}

  ngOnInit(): void {
    let id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.donutService.fetchDonutDetails(id).subscribe((response) => {
      this.displayDonut = response;
    });
  }

  addToCart(): void {
    this.donutService.addToCart(this.displayDonut);
  }
}
