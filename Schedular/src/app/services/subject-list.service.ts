import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Subject } from '../models/subject';
import { PelajarSubjek } from '../models/pelajarSubjek';
import { JadualSubjek } from '../models/jadualSubjek';
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

  pelajarSubjekParam = {
    entity: 'pelajar_subjek',
    no_matrik: this.storageHelperService.getNoMatrik(),
  }
    
  constructor(
    private http: HttpClient,
    private storageHelperService: StorageHelperService,
  ) { }

  getSubject(): Observable<Subject[]> {
    let subjectParams = new HttpParams({fromObject: this.subjectParam});
    
    return this.http.get<Subject[]>(this.url, {params: subjectParams});
  }

  GetPelajarSubjek(): Observable<PelajarSubjek[]> {
    let pelajarSubjekParams = new HttpParams({fromObject: this.pelajarSubjekParam});

    return this.http.get<PelajarSubjek[]>(this.url, {params: pelajarSubjekParams})
      .pipe(
        map(pelajarSubjek => {
          localStorage.removeItem('pelajar_subjek');
          localStorage.setItem('pelajar_subjek', JSON.stringify(pelajarSubjek));
          return pelajarSubjek;
        })
      )
  }

  GetJadualSubjek(kod_subjek: string, seksyen: string, sesi: string, semester: string ): Observable<JadualSubjek[]> {
    let jadualSubjekParam = {
      entity: "jadual_subjek",
      sesi: sesi,
      semester: semester,
      kod_subjek: kod_subjek,
      seksyen: seksyen
    };

    let jadualSubjekParams = new HttpParams({fromObject: jadualSubjekParam});

    return this.http.get<JadualSubjek[]>(this.url, {params: jadualSubjekParams});
  }
}
