import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventtablePageRoutingModule } from './eventtable-routing.module';

import { EventtablePage } from './eventtable.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventtablePageRoutingModule
  ],
  declarations: [EventtablePage]
})
export class EventtablePageModule {}
