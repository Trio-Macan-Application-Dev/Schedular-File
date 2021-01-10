import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';
import { TimetablePage } from './timetable/timetable.page';
import { EventtablePage } from './eventtable/eventtable.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    children: [
      {
        path: 'time-table',
        children: [
          {
            path: '',
            component: TimetablePage,
          }
        ]
      },
      {
        path: 'event-table',
        children: [
          {
            path: '',
            component: EventtablePage,
          }
        ]
      },
      {
        path: '',
        redirectTo: '/dashboard/time-table',
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
    path: 'eventtable',
    loadChildren: () => import('./eventtable/eventtable.module').then( m => m.EventtablePageModule)
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
