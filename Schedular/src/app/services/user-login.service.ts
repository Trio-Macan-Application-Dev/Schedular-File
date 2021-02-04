import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry, tap, map } from 'rxjs/operators';
import { StorageHelperService } from './storage-helper.service';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  url: string = 'http://web.fc.utm.my/ttms/web_man_webservice_json.cgi';

  constructor(
    private http: HttpClient,
  ) { }

  StudentLogin(username: string, password: string): Observable<User> {

    let userParam = {
      entity: 'authentication',
      login: username,
      password: password,
    }

    let studentParams = new HttpParams({fromObject: userParam});

    //let studentHeaders = new HttpHeaders().set('authorization','auth-token');

    return this.http.get<User>(this.url, {params: studentParams})
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
    
    localStorage.removeItem('auth_user');
    localStorage.removeItem('auth_admin');
    localStorage.removeItem('auth_admin_id');
    localStorage.removeItem('sesisemester');
    localStorage.removeItem('pelajar_subjek');
    localStorage.removeItem('pensyarah_subjek');
    sessionStorage.removeItem('userType');
  }

  private handleError(error: HttpErrorResponse) {
    console.log('Retry 3 times. Failed');
    return throwError(error);
  }

}
