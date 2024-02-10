import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeadsComponent } from './leads/leads.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { CalendarComponent } from './calendar/calendar.component';
import { InsertUpdateLeadDialogComponent } from './leads/insert-update-lead-dialog/insert-update-lead-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { DateFormatterPipe } from '../shared/pipes/date-formatter.pipe';
import { LineChartComponent } from './dashboard/charts/line-chart/line-chart.component';
import { BubbleChartComponent } from './dashboard/charts/bubble-chart/bubble-chart.component';
import { GaugeChartComponent } from './dashboard/charts/gauge-chart/gauge-chart.component';
import { PieChartComponent } from './dashboard/charts/pie-chart/pie-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

const components = [
  DashboardComponent,
  LeadsComponent,
  AnalyticsComponent,
  CalendarComponent,
  InsertUpdateLeadDialogComponent,
  LineChartComponent,
  BubbleChartComponent,
  GaugeChartComponent,
  PieChartComponent,
];

const pipes = [DateFormatterPipe];

@NgModule({
  declarations: [...components, ...pipes],
  // todo: create a shared module
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxChartsModule,
  ],
})
export class AdminModule {}
