import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'statistics-app';

  navigationItems = [
    { icon: 'dashboard', label: 'Dashboard', route: '/dashboard' },
    { icon: 'people', label: 'Leads', route: '/leads' },
    { icon: 'calendar_today', label: 'Calendar', route: '/calendar' },
  ];
}
