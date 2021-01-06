import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { map, retry, catchError } from "rxjs/operators";
import { Admin } from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {
  url: string = 'http://web.fc.utm.my/ttms/web_man_webservice_json.cgi';

  adminParam = {
    entity: 'authentication',
    login: 'ad2021',
    password: 'scsx3104',
  };

  constructor(private http: HttpClient,) { }

  adminLogin(): Observable<Admin[]> {
    let adminParams = new HttpParams({fromObject: this.adminParam});

    return this.http.get<Admin[]>(this.url, {params: adminParams})
      .pipe(
        map(admin => {
          // console.log(admin);
          // console.log(admin[0].session_id);
          localStorage.removeItem("auth_admin");
          localStorage.removeItem("auth_admin_id")
          localStorage.setItem("auth_admin", JSON.stringify(admin));
          localStorage.setItem("auth_admin_id", JSON.stringify(admin[0].session_id));
          return admin;
        }),
        retry(3),
        catchError(this.handleError),
      )
  }

  private handleError(error: HttpErrorResponse){
    console.log('Retry 3 times. Failed');
    return throwError(error);
  }
}
