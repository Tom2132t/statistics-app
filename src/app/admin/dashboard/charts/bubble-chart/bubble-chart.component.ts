import { Component, OnInit } from '@angular/core';
import { ScaleType } from '@swimlane/ngx-charts';
import { Observable, of } from 'rxjs';
import { ClientModel } from 'src/app/shared/models/client.model';
import { ClientService } from 'src/app/shared/services/client.service';

@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  styleUrls: ['./bubble-chart.component.scss'],
})
export class BubbleChartComponent {
  clients$!: Observable<ClientModel[]>;
  view: [number, number] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Population';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Years';
  maxRadius: number = 20;
  minRadius: number = 5;
  yScaleMin: number = 70;
  yScaleMax: number = 85;
  xScaleMin: number = 70;
  xScaleMax: number = 85;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
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
