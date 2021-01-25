import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllSubjectPage } from './all-subject.page';

const routes: Routes = [
  {
    path: '',
    component: AllSubjectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllSubjectPageRoutingModule {}
