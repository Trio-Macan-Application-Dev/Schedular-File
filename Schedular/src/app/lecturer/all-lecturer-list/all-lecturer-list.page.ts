import { Component, OnInit } from '@angular/core';

import { LecturerDetailsService } from '../../services/lecturer-details.service';
import { Observable } from 'rxjs';
import { Lecturer } from '../../models/lecturer';

@Component({
  selector: 'app-all-lecturer-list',
  templateUrl: './all-lecturer-list.page.html',
  styleUrls: ['./all-lecturer-list.page.scss'],
})
export class AllLecturerListPage implements OnInit {
  lecturers: Lecturer[];

  constructor(private lecturerDetailsService: LecturerDetailsService) { }

  ngOnInit() {
    this.lecturerDetailsService.getLecturers().subscribe(lecturers => {
      this.lecturers = lecturers;
    });
  }

}
