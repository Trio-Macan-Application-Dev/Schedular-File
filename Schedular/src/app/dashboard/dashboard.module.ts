import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { TimetablePage } from './timetable/timetable.page';
import { EventtablePage } from './eventtable/eventtable.page';
import { EventtablePageModule } from './eventtable/eventtable.module';
import { DashboardPage } from './dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
  ],
  declarations: [
    DashboardPage,
    TimetablePage,
    EventtablePage
  ]
})
export class DashboardPageModule {}
