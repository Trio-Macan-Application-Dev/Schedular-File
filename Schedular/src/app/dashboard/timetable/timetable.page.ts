import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.page.html',
  styleUrls: ['./timetable.page.scss'],
})
export class TimetablePage implements OnInit {
  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();

  calendar = {
    mode: 'week',
    currentDate: this.selectedDay
  }
  constructor() { }

  ngOnInit() {
  }

  onViewTitleChanged(title){
    this.viewTitle = title;
  }

  onTimeSelected(ev){
    
  }

  onEventSelected(event){

  }

}
