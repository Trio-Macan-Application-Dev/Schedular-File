import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../services/user-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(
    private userLoginService: UserLoginService,
    private route: Router,
  ) { }

  ngOnInit() {
  }

  logout() {
    this.userLoginService.logout();
    this.route.navigate(['/login']);
  }

}
