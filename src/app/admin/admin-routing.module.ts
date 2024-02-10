import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeadsComponent } from './leads/leads.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { CalendarComponent } from './calendar/calendar.component';
import { InsertUpdateLeadDialogComponent } from './leads/insert-update-lead-dialog/insert-update-lead-dialog.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'leads',
    component: LeadsComponent,
    children: [
      {
        path: ':LEAD_ID',
        component: InsertUpdateLeadDialogComponent,
      },
    ],
  },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'calendar', component: CalendarComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
