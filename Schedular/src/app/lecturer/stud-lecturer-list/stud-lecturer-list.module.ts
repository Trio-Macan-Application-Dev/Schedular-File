import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudLecturerListPageRoutingModule } from './stud-lecturer-list-routing.module';

import { StudLecturerListPage } from './stud-lecturer-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudLecturerListPageRoutingModule
  ],
  declarations: [StudLecturerListPage]
})
export class StudLecturerListPageModule {}
