import { Component } from '@angular/core';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  public title: string;
  constructor() {
    this.title = 'Dashboard';
  }
}
