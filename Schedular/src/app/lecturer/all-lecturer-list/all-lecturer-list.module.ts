import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllLecturerListPageRoutingModule } from './all-lecturer-list-routing.module';

import { AllLecturerListPage } from './all-lecturer-list.page';
import { LecturerDetailsService } from '../../services/lecturer-details.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllLecturerListPageRoutingModule,
  ],
  providers: [
    LecturerDetailsService
  ],
  declarations: [AllLecturerListPage]
})
export class AllLecturerListPageModule {}
