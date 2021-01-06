import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lecturer } from '../models/lecturer';

@Injectable({
  providedIn: 'root'
})
export class LecturerDetailsService {
  sessionId: string = '212140366307725';
  session: string = '2020/2021';
  semester: string = '1';
  lecturersUrl: string = 'http://web.fc.utm.my/ttms/web_man_webservice_json.cgi?entity=pensyarah&session_id='+ this.sessionId +'&sesi='+ this.session +'&semester=' + this.semester;

  constructor(private http: HttpClient) { }

  getLecturers(): Observable<Lecturer[]> {
    return this.http.get<Lecturer[]>(this.lecturersUrl);
  }
}
