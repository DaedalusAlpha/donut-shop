import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/models/donut';
import { DonutService } from 'src/app/services/donut.service';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css'],
})
export class DonutsComponent implements OnInit {
  donuts: Result[] = [];

  constructor(private donutService: DonutService) {}

  ngOnInit(): void {
    this.donutService.fetchDonuts().subscribe((response) => {
      this.donuts = response.results;
    });
  }
}
