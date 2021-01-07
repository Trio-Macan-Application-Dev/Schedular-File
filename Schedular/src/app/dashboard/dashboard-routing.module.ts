import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';
import { TimetablePage } from './timetable/timetable.page';
import { EventPage } from './event/event.page';
import { FinalExamPage } from './final-exam/final-exam.page';


const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    children: [
      {
        path: 'timetable',
        children: [
          {
            path: '',
            component: TimetablePage,
          }
        ]
      },
      {
        path: 'event',
        children: [
          {
            path: '',
            component: EventPage,
          }
        ] 
      },
      {
        path: 'final',
        children: [
          {
            path: '',
            component: FinalExamPage,
          }
        ]
      },
      {
        path: '',
        redirectTo: '/dashboard/timetable',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'timetable',
    loadChildren: () => import('./timetable/timetable.module').then( m => m.TimetablePageModule)
  },
  {
    path: 'event',
    loadChildren: () => import('./event/event.module').then( m => m.EventPageModule)
  },
  {
    path: 'final-exam',
    loadChildren: () => import('./final-exam/final-exam.module').then( m => m.FinalExamPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
