import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Observable } from 'rxjs';
import { Client } from '../../../../../shared/objects/client';
import { ClientStore } from '../store/client-store.service';

@Component({
  selector: 'app-client-page-details',
  templateUrl: './client-page-details.component.html',
  styleUrls: ['./client-page-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientPageDetailsComponent implements OnInit {

  client$: Observable<Client>;

  constructor(private clientStore: ClientStore,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['Jan - Feb', 'Mar - Apr', 'May - Jun', 'Jul - Aug', 'Sep - Oct', 'Nov - Dec'];
  public barChartType = 'line';
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55], label: 'Series A'},
  ];

  ngOnInit(): void {
    this.client$ = this.clientStore.getClient();
  }

  onEditClick(): void {
    this.router.navigate(['./edit'], {relativeTo: this.activatedRoute});
  }
}
