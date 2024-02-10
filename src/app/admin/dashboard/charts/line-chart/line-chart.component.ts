import { Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { Observable, of } from 'rxjs';
import { ClientModel } from 'src/app/shared/models/client.model';
import { ClientService } from 'src/app/shared/services/client.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent {
  clients$!: Observable<ClientModel[]>;
  view: [number, number] = [700, 300];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;

  colorScheme: Color = {
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

  // onSelect(data): void {
  //   console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  // }

  // onActivate(data): void {
  //   console.log('Activate', JSON.parse(JSON.stringify(data)));
  // }

  // onDeactivate(data): void {
  //   console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  // }
}
