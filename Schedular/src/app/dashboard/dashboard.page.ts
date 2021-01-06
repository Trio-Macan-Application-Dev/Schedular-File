import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  // student: any;
  // admin: any;
  // sesi:any;

  constructor(private menuController: MenuController) { }

  ngOnInit() {
    this.menuController.enable(true); //enable the side menu again
  }

  // onClick() {
  //   this.student = JSON.parse(localStorage.getItem('auth_user'));
  //   this.admin = JSON.parse(localStorage.getItem('auth_admin'));
  //   this.sesi = localStorage.getItem('current_sesi');
  //   console.log(this.student[0].session_id);
  //   console.log(this.admin);
  //   console.log(this.sesi);``
  // }

}
