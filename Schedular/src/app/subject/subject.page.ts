import { Component, OnInit } from '@angular/core';

import { SubjectDetailsService } from "../services/subject-list.service";
import { Subject } from '../models/subject';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.page.html',
  styleUrls: ['./subject.page.scss'],
})
export class SubjectPage implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

}
