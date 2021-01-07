import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinalExamPage } from './final-exam.page';

const routes: Routes = [
  {
    path: '',
    component: FinalExamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinalExamPageRoutingModule {}
