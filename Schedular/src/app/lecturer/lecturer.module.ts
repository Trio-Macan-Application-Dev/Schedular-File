import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LecturerPageRoutingModule } from './lecturer-routing.module';

import { LecturerPage } from './lecturer.page';
import { AllLecturerListPage } from './all-lecturer-list/all-lecturer-list.page';
import { StudLecturerListPage } from './stud-lecturer-list/stud-lecturer-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LecturerPageRoutingModule
  ],
  declarations: [
    LecturerPage,
    StudLecturerListPage,
    AllLecturerListPage,
  ]
})
export class LecturerPageModule {}
