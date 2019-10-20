import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';
import { SchedulePage } from '../schedule/schedule';
import { ProfilePage } from '../profile/profile.page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'camera',
        children: [
          {
            path: '',
            loadChildren: () => import('../camera/camera.module').then(m => m.CameraPageModule)
          }
        ]
      },
      {
        path: 'schedule',
        children: [
          {
            path: '',
            component: SchedulePage,
          },
          {
            path: 'session/:sessionId',
            loadChildren: () => import('../session-detail/session-detail.module').then(m => m.SessionDetailModule)
          },
          {
            path: 'profile',
            component: ProfilePage,
          },
        ]
      },
      {
        path: 'venues',
        children: [
          {
            path: '',
            loadChildren: () => import('../venue-list/venue-list.module').then(m => m.VenueListModule)
          },
          {
            path: 'session/:sessionId',
            loadChildren: () => import('../session-detail/session-detail.module').then(m => m.SessionDetailModule)
          },
          {
            path: 'venue-details/:id',
            loadChildren: () => import('../venue-detail/venue-detail.module').then(m => m.VenueDetailModule)
          }
        ]
      },
      {
        path: 'map',
        children: [
          {
            path: '',
            loadChildren: () => import('../map/map.module').then(m => m.MapModule)
          }
        ]
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: () => import('../about/about.module').then(m => m.AboutModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/tabs/schedule',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

