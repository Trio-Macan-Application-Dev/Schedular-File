import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventtablePageRoutingModule } from './eventtable-routing.module';

import { EventtablePage } from './eventtable.page';
import { DashboardPageModule } from '../dashboard.module';
// import { NgCalendarModule } from 'ionic2-calendar';

@NgModule({
  imports: [
    // NgCalendarModule,
    CommonModule,
    FormsModule,
    IonicModule,
    EventtablePageRoutingModule,
  ],
  declarations: [EventtablePage]
})
export class EventtablePageModule {}
