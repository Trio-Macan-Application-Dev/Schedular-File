import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from '../models/subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectDetailsService {
<<<<<<< HEAD
  sessionId: string = '4294941241511';
=======
  sessionId: string = '212140366307725';
>>>>>>> 37e9d754b996f465db2b2e74baa9086523aeacef
  session: string = '2020/2021';
  semester: string = '1';
  subjectUrl: string = 'http://web.fc.utm.my/ttms/web_man_webservice_json.cgi?entity=subjek&session_id='+ this.sessionId +'&sesi='+ this.session +'&semester=' + this.semester;

  constructor(private http: HttpClient) { }

  getSubject(): Observable<Subject[]> {
    return this.http.get<Subject[]>(this.subjectUrl);
  }
}
