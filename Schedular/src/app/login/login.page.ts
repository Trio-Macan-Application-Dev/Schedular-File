import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private menuController: MenuController) { }
  // Variable
  
  ngOnInit() {
  // Function
    this.menuController.enable(false); //disable side menu in login page
  }
}

 

 