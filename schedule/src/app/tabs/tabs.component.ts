import { Component } from '@angular/core';
import { WeekServiceService } from '../services/week-service.service';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {
  constructor(private weekService: WeekServiceService) {}

  isTabDisabled(tabNumber: number): boolean {
    console.log(this.weekService.getCurrentWeek());
    return this.weekService.getCurrentWeek() <= tabNumber;
  }
}
