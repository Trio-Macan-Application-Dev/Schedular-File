import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry, tap, map } from 'rxjs/operators';
import { StorageHelperService } from './storage-helper.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  url: string = 'http://web.fc.utm.my/ttms/web_man_webservice_json.cgi';
  user:User = new User();

  constructor(
    private http: HttpClient,
    private storageHelperService: StorageHelperService,
  ) { }

  login(username: string, password: string): Observable<Student> {

    let studentParam = {
      entity: 'authentication',
      login: username,
      password: password,
    }

    let studentParams = new HttpParams({fromObject: studentParam});

    //let studentHeaders = new HttpHeaders().set('authorization','auth-token');

    return this.http.get<Student>(this.url, {params: studentParams})
          .pipe(
            map(student => {
              localStorage.removeItem('auth_user');
              localStorage.setItem('auth_user', JSON.stringify(student));
              return student;
            }),
            retry(3), //retry 3 times to access the link if it failed for the first time
            catchError(this.handleError) 
          )
  }

  logout() {
    // localStorage.removeItem('auth_user');
    // localStorage.removeItem('auth_admin');
    // localStorage.clear();
    // this.user.userValue = 0;
    // console.log("logout" + this.user.userValue);
    
    localStorage.removeItem('auth_user');
    localStorage.removeItem('auth_admin');
    localStorage.removeItem('auth_admin_id');
    localStorage.removeItem('sesisemester');
    localStorage.removeItem('pelajar_subjek');
    // console.log(JSON.parse(localStorage.getItem('auth_user')));
    // console.log(JSON.parse(localStorage.getItem('auth_admin')));
  }

  private handleError(error: HttpErrorResponse) {
    //console.log(error);
    console.log('Retry 3 times. Failed');
    return throwError(error);
  }

}
