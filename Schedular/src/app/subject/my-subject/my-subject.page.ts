import { Component, OnInit } from '@angular/core';

import { SubjectDetailsService } from '../../services/subject-list.service';
import { PelajarSubjek } from '../../models/pelajarSubjek';
import { StorageHelperService } from 'src/app/services/storage-helper.service';
import { PensyarahSubjek } from 'src/app/models/pensyarahSubjek';

@Component({
  selector: 'app-my-subject',
  templateUrl: './my-subject.page.html',
  styleUrls: ['./my-subject.page.scss'],
})
export class MySubjectPage implements OnInit {
  protected pensyarahSubjeks: PensyarahSubjek[];
  protected pelajarSubjeks: PelajarSubjek[];
  protected userType: string;

  constructor(private subjectDetailsService: SubjectDetailsService, private storageHelperService: StorageHelperService) { 
    this.userType = this.storageHelperService.userType;
  }

  ngOnInit() {
    if(this.userType === 'student') {
      this.subjectDetailsService.GetPelajarSubjek().subscribe(pelajarSubjek => {
        this.pelajarSubjeks = pelajarSubjek;
      });
    }
    else {
      this.subjectDetailsService.GetPensyarahSubjek().subscribe(pensyarahSubjek => {
        this.pensyarahSubjeks = pensyarahSubjek;
      });
    }
  }

}
