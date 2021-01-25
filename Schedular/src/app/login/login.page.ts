import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController } from '@ionic/angular';
import { FormBuilder,FormControl,FormGroup,Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { Student } from '../models/student';
import { AppComponent } from '../app.component';
import { User } from '../models/user';
import { map } from 'rxjs/operators';

import { UserLoginService } from "../services/user-login.service";
import { AdminLoginService } from "../services/admin-login.service";
import { SesiSemesterService } from '../services/sesi-semester.service';
import { SubjectDetailsService } from '../services/subject-list.service';
import { StorageHelperService } from '../services/storage-helper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  student: Student;
  user:User = new User();

  constructor(
    private menuController: MenuController,
    private formBuilder: FormBuilder,
    private userLoginService: UserLoginService,
    private adminLoginService: AdminLoginService,
    private sesiSemesterService: SesiSemesterService,
    private subjectDetailsService: SubjectDetailsService,
    private route: Router,
    private alertController: AlertController,
    private storageHelperService: StorageHelperService,
    private appComponent: AppComponent,
    ) { 
        this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
        });
      }
  // Variable
  
  ngOnInit() {
    this.menuController.enable(false); //disable side menu in login page
    // this.route.navigate(['/dashboard']);
  }

  get userLogin() {return this.loginForm.controls;}

  onSubmit() {
    this.userLoginService.login(this.userLogin.username.value, this.userLogin.password.value)
      .subscribe(
        student => {
          if(student != null){
            this.student = student;

            //Get admin details and store in local storage
            this.adminLoginService.adminLogin().subscribe(admin => {});

            //Get session semester details
            this.sesiSemesterService.getSesisemester().subscribe(sesisemester => {});

            //Get pelajar_subjek details
            this.subjectDetailsService.GetPelajarSubjek().subscribe(pelajarSubjek => {});
            
            // this.storageHelperService.UserLogin = 1;
            this.user.userValue = 1;
            console.log("login"+this.user.userValue);
            this.appComponent.ngOnInit(1);
            

            this.menuController.enable(true); //enable the side menu after succesful login
            this.route.navigate(['/dashboard']); //redirect to dashboard after successful login
          } 
          else {
            this.loginALert();
            this.route.navigate(['/login']);
          }
        },
        error => {
          console.log('error but in login page');
        }
      );
    
    //console.log(localStorage.getItem('auth_user'));
  }

  async loginALert() {
    const alert = await this.alertController.create({
      header: 'Login Failed',
      message: 'Please check your username and password',
      buttons: ['Dismiss'],
    });

    await alert.present();
  }

}