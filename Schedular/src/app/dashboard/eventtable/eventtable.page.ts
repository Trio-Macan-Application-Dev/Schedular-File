import { Component, OnInit } from '@angular/core';

import { StorageHelperService } from '../../services/storage-helper.service';
import { SubjectDetailsService } from '../../services/subject-list.service';
import { JadualSubjek } from '../../models/jadualSubjek';

@Component({
  selector: 'app-eventtable',
  templateUrl: './eventtable.page.html',
  styleUrls: ['./eventtable.page.scss'],
})
export class EventtablePage implements OnInit {
  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();

  calendar = {
    mode: 'week',
    currentDate: this.selectedDay
  }

  protected timetables;
  private course_list;
  private ttlist_info: JadualSubjek[];
  private sesi: string;
  private semester: string;
  private day_list: string[];

  constructor(private storageHelperService: StorageHelperService, private subjectDetailsService: SubjectDetailsService) { 
    this.timetables = { "times": [
      {"time": "7:00 AM - 7:50 AM", "days": []},
      {"time": "8:00 AM - 8:50 AM", "days": []},
      {"time": "9:00 AM - 9:50 AM", "days": []},
      {"time": "10:00 AM - 10:50 AM", "days": []},
      {"time": "11:00 AM - 11:50 AM", "days": []},
      {"time": "12:00 PM - 12:50 PM", "days": []},
      {"time": "1:00 PM - 1:50 PM", "days": []},
      {"time": "2:00 PM - 2:50 PM", "days": []},
      {"time": "3:00 PM - 3:50 PM", "days": []},
      {"time": "4:00 PM - 4:50 PM", "days": []},
      {"time": "5:00 PM - 5:50 PM", "days": []},
      {"time": "6:00 PM - 6:50 PM", "days": []},
      {"time": "7:00 PM - 7:50 PM", "days": []},
      {"time": "8:00 PM - 8:50 PM", "days": []},
      {"time": "9:00 PM - 9:50 PM", "days": []},
    ]};

    this.day_list = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    this.course_list = this.storageHelperService.getPelajarSubjek();

    this.sesi = this.storageHelperService.getCurrentSesi();
    this.semester = this.storageHelperService.getCurrentSemester();

  }

  ngOnInit() {
    this.timetables.times.forEach(time => {
      for(let i = 0;i < 7;i++) {
        time.days[i] = {"name": this.day_list[i], "course_code": " ", "section": " ", "room": " "}
      }
    });

    // this.day_list.forEach(day => {
    //   console.log(day);
    // });

    this.GetCurrentCourse();

    // console.log(this.course_list);
    // console.log(this.sesi);
    // console.log(this.semester);
  }

  GetCurrentCourse() {
    this.course_list.forEach(course => {
      if(course.sesi == this.sesi && course.semester == this.semester) {
        // console.log(course.kod_subjek + "-" + course.seksyen);

        this.subjectDetailsService.GetJadualSubjek(course.kod_subjek, course.seksyen, this.sesi, this.semester)
          .subscribe(
            ttlist_info => {
              this.ttlist_info = ttlist_info;

              if(this.ttlist_info[0].kod_subjek != null) {
                this.ttlist_info.forEach(item => {
                  // console.log("Course code: " + item.kod_subjek);
                  // console.log("Time: " + item.masa);
                  // console.log("Day: " + item.hari);
                  // console.log("Ruang: " + item.ruang.nama_ruang_singkatan);
                  

                  let idx_time = item.masa - 1;
                  let idx_day = item.hari - 1;

                  this.timetables.times[idx_time].days[idx_day].course_code = item.kod_subjek;
                  this.timetables.times[idx_time].days[idx_day].section = "-" + item.seksyen;
                  this.timetables.times[idx_time].days[idx_day].room = item.ruang.nama_ruang_singkatan;
                });
              }
            }
          )
      }
    });
  }

  onViewTitleChanged(title){
    this.viewTitle = title;
  }

  onTimeSelected(ev){
    
  }

  onEventSelected(event){

  }

  
}
