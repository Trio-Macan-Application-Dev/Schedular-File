import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { StorageHelperService } from './services/storage-helper.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  currentPageTitle = 'Dashboard';
  user:User = new User();

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

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storageHelperService: StorageHelperService
  ) {
    this.initializeApp();
  }
  
  ngOnInit() {
  }

  ShowNameAndMatrikId() {
    console.log("ShowNameAndMatrikId1");
    console.log(this.storageHelperService.UserLogin);
    
    if(this.storageHelperService.UserLogin == 0) {
      this.name = "test";
      this.matrik = "test";
      console.log("ShowNameAndMatrikId2");
    }
    if(this.storageHelperService.UserLogin == 1) {
      this.name = this.storageHelperService.getFullName();
      this.matrik = this.storageHelperService.getNoMatrik();
      console.log("ShowNameAndMatrikId3");
    }
  }

  // name = this.storageHelperService.getFullName();
  // matrik = this.storageHelperService.getNoMatrik();
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
