import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LecturerDetails } from '../models/lecturerDetails';
import { StorageHelperService } from '../services/storage-helper.service';

@Injectable({
  providedIn: 'root'
})
export class LecturerDetailsService {

  url: string = 'http://web.fc.utm.my/ttms/web_man_webservice_json.cgi';

  // can set  the parameters using either option 1
  lectParam = {
    entity: 'pensyarah',
    session_id: this.storageHelperService.getAdminSessionId(),
    sesi: this.storageHelperService.getCurrentSesi(),
    semester: this.storageHelperService.getCurrentSemester().toString(),
  }

  constructor(
    private http: HttpClient,
    private storageHelperService: StorageHelperService,
  ) { }

  getLecturers(): Observable<LecturerDetails[]> {
    let lectParams = new HttpParams({fromObject: this.lectParam});

    //or use option 2
    // let lectParams = new HttpParams()
    //     .set('entity','pensyarah')
    //     .set('session_id','200294075033892')
    //     .set('sesi','2020/2021')
    //     .set('semester','1')

    return this.http.get<LecturerDetails[]>(this.url, {params: lectParams} );
  }
}
