import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LecturerPage } from './lecturer.page';
import { AllLecturerListPage } from './all-lecturer-list/all-lecturer-list.page';
import { StudLecturerListPage } from './stud-lecturer-list/stud-lecturer-list.page';

const routes: Routes = [
  {
    path: '',
    component: AllLecturerListPage,
    // children: [
    //   {
    //     path: 'stud-lecturer',
    //     children: [
    //       {
    //         path: '',
    //         component: StudLecturerListPage,
    //       }
    //     ]
    //   },
    //   {
    //     path: 'all-lecturer',
    //     children: [
    //       {
    //         path: '',
    //         component: AllLecturerListPage,
    //       }
    //     ]
    //   },
    //   {
    //     path: '',
    //     redirectTo: '/lecturer/all-lecturer',
    //     pathMatch: 'full'
    //   }
    // ]
  }
  // {
  //   path: '',
  //   redirectTo: '/all-lecturer',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'all-lecturer-list',
  //   loadChildren: () => import('./all-lecturer-list/all-lecturer-list.module').then( m => m.AllLecturerListPageModule)
  // },
  // {
  //   path: 'stud-lecturer-list',
  //   loadChildren: () => import('./stud-lecturer-list/stud-lecturer-list.module').then( m => m.StudLecturerListPageModule)
  // }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LecturerPageRoutingModule {}
