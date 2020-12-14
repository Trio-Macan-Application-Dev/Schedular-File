import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lecturer } from '../models/lecturer';

@Injectable({
  providedIn: 'root'
})
export class LecturerDetailsService {
  lecturersUrl: string = 'http://web.fc.utm.my/ttms/web_man_webservice_json.cgi?entity=pensyarah&session_id=649078419304718&sesi=2020/2021&semester=1';

  constructor(private http: HttpClient) { }

  getLecturers(): Observable<Lecturer[]> {
    return this.http.get<Lecturer[]>(this.lecturersUrl);
  }
}
