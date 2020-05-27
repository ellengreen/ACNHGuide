import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CurrentDateService {

  today: any;
  currentMonth: any;
  constructor(private datePipe: DatePipe) { }

  //takes current date and returns the current month as a number
  getMonth() {
    this.today = this.datePipe.transform(Date.now(), 'shortDate'); // MM/DD/YY
    this.currentMonth = Number(this.today.split('/')[0]); // MM
    return this.currentMonth //returns MM
  }
}
