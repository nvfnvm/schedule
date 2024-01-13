import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeekServiceService {
  
  private startDate: Date;

  constructor() { 
    this.startDate = new Date('2024-01-01');
  }
  getCurrentWeek(): number {
    const currentDate = new Date();
    const timeDiff = currentDate.getTime() - this.startDate.getTime();
    const weeksElapsed = Math.floor(timeDiff / (1000 * 3600 * 24 * 7));
    const currentWeek = weeksElapsed + 1;
    console.log('Текущая неделя:', currentWeek);
  return currentWeek;
  }
}
