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
  name: string;
  course: string;
  matrik: string;
  noPekerja: string;
  userType: string;
  sesi: String;
  semester: String;
  sesiSemester: string;
  semStartDate: String;
  semEndDate: String;
  semDate: string;

  constructor(
    private userLoginService: UserLoginService,
    private route: Router,
    private storageHelperService: StorageHelperService // invoke pckge
  ) 
  {
    this.userType = this.storageHelperService.userType;
    this.SetUserDetails();
  }

  ngOnInit() {
    
  }

  SetUserDetails() { // Pass value to settings.page.html
    this.name = this.storageHelperService.getFullName();
    if(this.userType === "student") {
      this.matrik = this.storageHelperService.getNoMatrik();
      this.course = this.storageHelperService.getPelajarSubjekKursus();
    }
    else if(this.userType === 'lecturer') {
      this.noPekerja = this.storageHelperService.getNoPekerja();
    }

    // value sesi semester
    this.sesi = this.storageHelperService.getCurrentSesi();
    this.semester = this.storageHelperService.getCurrentSemester();
    this.sesiSemester = this.semester + ' | ' + this.sesi ;
    
    // value sesi semester start and end
    this.semStartDate = this.storageHelperService.getStartDate();
    this.semEndDate= this.storageHelperService.getEndDate();
    this.semDate = this.semStartDate + ' till ' + this.semEndDate;
  }

  logout() {
    this.userLoginService.logout();
    this.route.navigate(['/login']);
  }

}
