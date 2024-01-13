import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent {
  calculateProgress(): number {
    const dayOfWeek = new Date().getDay();
    const hourOfDay = new Date().getHours();

    return (dayOfWeek * 24 + hourOfDay) / (7 * 24) * 100;
  }
}
