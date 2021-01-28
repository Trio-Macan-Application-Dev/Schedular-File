import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { StorageHelperService } from '../services/storage-helper.service';
import { SubjectDetailsService } from '../services/subject-list.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  student: any;
  admin: any;
  sesi:any;

  constructor(
    private menuController: MenuController,
    private storageHelperService: StorageHelperService,
    // private subjectDetailsService: SubjectDetailsService,
    ) { }

  ngOnInit() {
    this.menuController.enable(true); //enable the side menu again
    // this.subjectDetailsService.GetPelajarSubjek().subscribe(pelajarSubjek => {});
  }

  //name = this.storageHelperService.getFullName();
  
  onClick() {
    // this.student = JSON.parse(localStorage.getItem('auth_user'));
    // this.admin = JSON.parse(localStorage.getItem('auth_admin'));
    // this.sesi = localStorage.getItem('current_sesi');
    // console.log(this.student[0].session_id);
    // console.log(this.admin);
    // console.log(this.sesi);
    console.log(this.storageHelperService.getAdminSessionId());
    console.log(this.storageHelperService.getUserSessionId());
    console.log(this.storageHelperService.getCurrentSemester());
    console.log(this.storageHelperService.getCurrentSesi());
    
  }

}
