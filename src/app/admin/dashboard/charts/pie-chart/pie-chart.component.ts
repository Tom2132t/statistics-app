import { Component, OnInit } from '@angular/core';
import { LegendPosition, ScaleType } from '@swimlane/ngx-charts';
import { Observable, of } from 'rxjs';
import { ClientModel } from 'src/app/shared/models/client.model';
import { ClientService } from 'src/app/shared/services/client.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent {
  clients$!: Observable<ClientModel[]>;
  view: [number, number] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition!: LegendPosition.Below;

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
