import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  date: string;
  type: 'string';

  constructor() { }

  ngOnInit() {
  }

  onChange($event){
    console.log($event);
  }

}
