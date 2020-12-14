import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllLecturerListPage } from './all-lecturer-list.page';

const routes: Routes = [
  {
    path: '',
    component: AllLecturerListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllLecturerListPageRoutingModule {}
