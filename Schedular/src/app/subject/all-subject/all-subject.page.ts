import { Component, OnInit } from '@angular/core';

import { SubjectDetailsService } from "../../services/subject-list.service";
import { Subject } from '../../models/subject';

@Component({
  selector: 'app-all-subject',
  templateUrl: './all-subject.page.html',
  styleUrls: ['./all-subject.page.scss'],
})
export class AllSubjectPage implements OnInit {
  subjects: Subject[];

  constructor(private subjectDetailsService: SubjectDetailsService) { }

  ngOnInit() {
    this.subjectDetailsService.getSubject().subscribe( subjects => {
      this.subjects = subjects;
    });
  }

}
