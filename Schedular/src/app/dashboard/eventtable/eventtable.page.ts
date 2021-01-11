import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventtable',
  templateUrl: './eventtable.page.html',
  styleUrls: ['./eventtable.page.scss'],
})
export class EventtablePage implements OnInit {
  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();

  calendar = {
    mode: 'month',
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
