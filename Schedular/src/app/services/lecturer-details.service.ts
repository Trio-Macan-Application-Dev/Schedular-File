import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lecturer } from '../models/lecturer';

@Injectable({
  providedIn: 'root'
})
export class LecturerDetailsService {
<<<<<<< HEAD

  lecturersUrl: string = 'http://web.fc.utm.my/ttms/web_man_webservice_json.cgi';
=======
  sessionId: string = '212140366307725';
  session: string = '2020/2021';
  semester: string = '1';
  lecturersUrl: string = 'http://web.fc.utm.my/ttms/web_man_webservice_json.cgi?entity=pensyarah&session_id='+ this.sessionId +'&sesi='+ this.session +'&semester=' + this.semester;
>>>>>>> 37e9d754b996f465db2b2e74baa9086523aeacef

  constructor(private http: HttpClient) { }

  getLecturers(): Observable<Lecturer[]> {

    // can set  the parameters using either option 1
    let lectParam = {
      entity: 'pensyarah',
      session_id: '817906194052924',
      sesi: '2020/2021',
      semester: '1'
    }

    let lectParams = new HttpParams({fromObject:lectParam});

    //or use option 2
    // let lectParams = new HttpParams()
    //     .set('entity','pensyarah')
    //     .set('session_id','200294075033892')
    //     .set('sesi','2020/2021')
    //     .set('semester','1')

    return this.http.get<Lecturer[]>(this.lecturersUrl, {params: lectParams} );
  }
}
