import { Component, OnInit } from '@angular/core';

import { SubjectDetailsService } from '../../services/subject-list.service';
import { PelajarSubjek } from '../../models/pelajarSubjek';

@Component({
  selector: 'app-my-subject',
  templateUrl: './my-subject.page.html',
  styleUrls: ['./my-subject.page.scss'],
})
export class MySubjectPage implements OnInit {
  pelajarSubjeks: PelajarSubjek[];

  constructor(private subjectDetailsService: SubjectDetailsService) { }

  ngOnInit() {
    this.subjectDetailsService.GetPelajarSubjek().subscribe(pelajarSubjek => {
      this.pelajarSubjeks = pelajarSubjek;
    })
  }

}
