import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController } from '@ionic/angular';
import { FormBuilder,FormControl,FormGroup,Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { Student } from '../models/student';
import { AppComponent } from '../app.component';
import { User } from '../models/user';
import { Admin } from '../models/admin';
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
  admin: Admin[];
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
            // console.log(this.student[0].login_name);
            
            //Get admin details and store in local storage
            this.adminLoginService.adminLogin().subscribe(admin => {
              this.admin = admin;
              console.log(this.admin[0].session_id);
              if(this.admin != null) {
                this.subjectDetailsService.GetPelajarSubjek2(this.student[0].login_name).subscribe(pelajarSubjek => {});
                console.log("awal "+this.storageHelperService.UserLogin);
                
                this.storageHelperService.UserLogin = 1;
                console.log("akhir "+this.storageHelperService.UserLogin);
                
                this.appComponent.ShowNameAndMatrikId();
              }
            });

            // this.subjectDetailsService.GetPelajarSubjek().subscribe(pelajarSubjek => {});

            //Get session semester details
            this.sesiSemesterService.getSesisemester().subscribe(sesisemester => {});
            
            // this.storageHelperService.UserLogin = 1;
            // this.user.userValue = 1;
            // console.log("login"+this.user.userValue);
            
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