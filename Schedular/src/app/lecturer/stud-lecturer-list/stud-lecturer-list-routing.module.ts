import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudLecturerListPage } from './stud-lecturer-list.page';

const routes: Routes = [
  {
    path: '',
    component: StudLecturerListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudLecturerListPageRoutingModule {}
