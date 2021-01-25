import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubjectPage } from './subject.page';
import { AllSubjectPage } from './all-subject/all-subject.page';
import { MySubjectPage } from './my-subject/my-subject.page';

const routes: Routes = [
  {
    path: '',
    component: SubjectPage,
    children: [
      {
        path: 'my-subject',
        children: [
          {
            path: '',
            component: MySubjectPage,
          }
        ]
      },
      {
        path: 'all-subject',
        children: [
          {
            path: '',
            component: AllSubjectPage,
          }
        ]
      },
      {
        path: '',
        redirectTo: '/subject/my-subject',
        pathMatch: 'full',
      }
    ]
  },{
    path: '',
    redirectTo: '/subject',
    pathMatch: 'full'
  },
  {
    path: 'all-subject',
    loadChildren: () => import('./all-subject/all-subject.module').then( m => m.AllSubjectPageModule)
  },
  {
    path: 'my-subject',
    loadChildren: () => import('./my-subject/my-subject.module').then( m => m.MySubjectPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubjectPageRoutingModule {}
