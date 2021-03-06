import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { StorageHelperService } from './services/storage-helper.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  currentPageTitle = 'Dashboard';

  appPages = [
    {
      title: 'Dashboard',
      url: '',
      icon: 'easel'
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: 'settings'
    }
  ];
  
  name: string;
  matrik: string;
  noPekerja: String
  userType: string;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storageHelperService: StorageHelperService
  ) {
    this.initializeApp();
  }
  
  ngOnInit() {
    this.showUserDetails();
  }

  showUserDetails() {
    
    this.userType = sessionStorage.getItem('userType');
    console.log("ShowNameAndMatrikId1");
    console.log(this.userType);
    
    if(this.userType === "student") {
      this.name = this.storageHelperService.getFullName();
      this.matrik = this.storageHelperService.getNoMatrik();
    }
    else if(this.userType === "lecturer") {
      this.name = this.storageHelperService.getFullName();
      this.noPekerja = this.storageHelperService.getNoPekerja();
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
