import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllSubjectPageRoutingModule } from './all-subject-routing.module';

import { AllSubjectPage } from './all-subject.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllSubjectPageRoutingModule
  ],
  declarations: [AllSubjectPage]
})
export class AllSubjectPageModule {}
