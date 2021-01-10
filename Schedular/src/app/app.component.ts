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

  userLogin: number;
  name: string;
  matrik: string;
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storageHelperService: StorageHelperService
  ) {
    // localStorage.clear();
    this.userLogin = this.storageHelperService.UserLogin;
    this.initializeApp();
  }

  ngOnInit() {
    
    if(this.userLogin == 0) {
      this.name = "";
      this.matrik = "";
    }
    else {
      this.name = this.storageHelperService.getFullName();
      this.matrik = this.storageHelperService.getNoMatrik();
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
