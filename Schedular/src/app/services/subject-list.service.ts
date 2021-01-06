import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from '../models/subject';
import { StorageHelperService } from '../services/storage-helper.service';

@Injectable({
  providedIn: 'root'
})
export class SubjectDetailsService {
  url: string = 'http://web.fc.utm.my/ttms/web_man_webservice_json.cgi';

  subjectParam = {
    entity: 'subjek',
    session_id: this.storageHelperService.getAdminSessionId(),
    sesi: this.storageHelperService.getCurrentSesi(),
    semester: this.storageHelperService.getCurrentSemester(),
  }

  constructor(
    private http: HttpClient,
    private storageHelperService: StorageHelperService,
  ) { }

  getSubject(): Observable<Subject[]> {
    let subjectParams = new HttpParams({fromObject: this.subjectParam});
    
    return this.http.get<Subject[]>(this.url, {params: subjectParams});
  }
}
