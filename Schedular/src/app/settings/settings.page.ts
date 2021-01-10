import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../services/user-login.service';
import { Router } from '@angular/router';
import {StorageHelperService} from '../services/storage-helper.service'; // import package from StorageHelperService

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(
    private userLoginService: UserLoginService,
    private route: Router,
    private storageHelperService: StorageHelperService // invoke pckge
  ) { }

  // // Parse value to settings.page.html
  // name = this.storageHelperService.getFullName();
  // //course = this.storageHelperService.getCourseCode();
  // matrik = this.storageHelperService.getNoMatrik();
  
  // // value sesi semester
  // sesi: String = this.storageHelperService.getCurrentSesi();
  // semester: String = this.storageHelperService.getCurrentSemester();
  // sesiSemester = this.semester + ' | ' + this.sesi ;
  
  // // value sesi semester start and end
  // semStartDate: String = this.storageHelperService.getStartDate();
  // semEndDate: String = this.storageHelperService.getEndDate();
  // semDate = this.semStartDate + ' till ' + this.semEndDate;

  ngOnInit() {
  }

  logout() {
    this.userLoginService.logout();
    this.route.navigate(['/login']);
  }

}
