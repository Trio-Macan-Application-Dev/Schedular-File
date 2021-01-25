import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubjectPageRoutingModule } from './subject-routing.module';

import { SubjectPage } from './subject.page';
import { AllSubjectPage } from './all-subject/all-subject.page';
import { MySubjectPage } from './my-subject/my-subject.page';
import { SubjectDetailsService } from '../services/subject-list.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubjectPageRoutingModule
  ],
  providers: [
    SubjectDetailsService,
  ],
  declarations: [
    SubjectPage,
    MySubjectPage,
    AllSubjectPage,
  ]
})
export class SubjectPageModule {}
