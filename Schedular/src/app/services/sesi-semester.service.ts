import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Sesisemester } from '../models/sesisemester';

@Injectable({
  providedIn: 'root'
})
export class SesiSemesterService {
  url: string = 'http://web.fc.utm.my/ttms/web_man_webservice_json.cgi';

  param = {
    entity: 'sesisemester',
  }

  constructor(private http: HttpClient) { }

  getSesisemester(): Observable<Sesisemester[]> {
    let params = new HttpParams({fromObject: this.param});

    return this.http.get<Sesisemester[]>(this.url, {params: params})
      .pipe(
        map(sesisemester => {
          // localStorage.removeItem('current_sem');
          // localStorage.removeItem('current_sesi');
          // localStorage.setItem('current_sem', JSON.stringify(sesisemester[0].))
          // let sesisem = sesisemester;
          // console.log(sesisemester[0].sesi);
          // localStorage.setItem('current_sem', sesisemester[0].semester);
          // localStorage.setItem('current_sesi', sesisemester[0].sesi);
          // console.log(localStorage.getItem('current_sem'));
          // console.log(localStorage.getItem('current_sesi'));
          localStorage.removeItem('sesisemester');
          localStorage.setItem('sesisemester', JSON.stringify(sesisemester));

          return sesisemester;
        })
      );
  }
}
