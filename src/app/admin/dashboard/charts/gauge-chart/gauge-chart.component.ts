import { Component, OnInit } from '@angular/core';
import { LegendPosition, ScaleType } from '@swimlane/ngx-charts';
import { Observable, of } from 'rxjs';
import { ClientModel } from 'src/app/shared/models/client.model';
import { ClientService } from 'src/app/shared/services/client.service';

@Component({
  selector: 'app-gauge-chart',
  templateUrl: './gauge-chart.component.html',
  styleUrls: ['./gauge-chart.component.scss'],
})
export class GaugeChartComponent {
  clients$!: Observable<ClientModel[]>;
  view: [number, number] = [500, 400];
  legend: boolean = true;
  legendPosition!: LegendPosition.Below;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
    group: ScaleType.Ordinal,
    selectable: true,
    name: 'Customer Usage',
  };

  constructor(private clientsService: ClientService) {
    this.getClients();
  }

  getClients(): void {
    this.clientsService.getLeads()?.subscribe((data) => {
      this.clients$ = of(data);
    });
  }
}
