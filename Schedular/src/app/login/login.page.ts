import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AppComponent } from '../app.component';
import { Admin } from '../models/admin';

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
  protected loginForm: FormGroup;
  protected student: User;
  protected admin: Admin[];

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
  
  ngOnInit() {
    this.menuController.enable(false); //disable side menu in login page
  }

  get userLogin() {return this.loginForm.controls;}

  onSubmit() {
    this.userLoginService.StudentLogin(this.userLogin.username.value, this.userLogin.password.value)
      .subscribe(
        student => {
          if(student != null){
            this.student = student;
            console.log("No pekerja: "+this.student[0].no_pekerja);
            console.log("Nama: "+this.student[0].full_name);
            

            //Get admin details and store in local storage
            this.adminLoginService.adminLogin().subscribe(admin => {
              this.admin = admin;
              console.log(this.admin[0].session_id);
              if(this.admin != null) {
                if(this.student[0].no_pekerja != null){
                  console.log("np ada");
                  this.subjectDetailsService.GetPensyarahSubjek().subscribe(() => {})
                  // console.log("awal "+this.storageHelperService.userType);
                
                  // this.storageHelperService.userType = "lecturer";
                  sessionStorage.setItem('userType', 'lecturer');
                  console.log('session'+sessionStorage.getItem('userType'));
                  
                  // console.log("akhir "+this.storageHelperService.userType);
                }
                else {
                  console.log("np tak de");
                  this.subjectDetailsService.GetPelajarSubjek().subscribe(() => {});
                  // console.log("awal "+this.storageHelperService.userType);
                
                  // this.storageHelperService.userType = "student";
                  sessionStorage.setItem('userType', 'student');
                  console.log('session'+sessionStorage.getItem('userType'));
                  // console.log("akhir "+this.storageHelperService.userType);
                }

                this.appComponent.showUserDetails();
              }
            });

            //Get session semester details
            this.sesiSemesterService.getSesisemester().subscribe(() => {});
            
            this.menuController.enable(true); //enable the side menu after succesful login
            this.route.navigate(['/dashboard']); //redirect to dashboard after successful login
          } 
          else {
            this.loginALert();
            this.route.navigate(['/login']);
          }
        },
        error => {
          console.log(error);
        }
      );
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