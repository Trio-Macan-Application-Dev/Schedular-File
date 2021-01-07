import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinalExamPageRoutingModule } from './final-exam-routing.module';

import { FinalExamPage } from './final-exam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinalExamPageRoutingModule
  ],
  declarations: [FinalExamPage]
})
export class FinalExamPageModule {}
