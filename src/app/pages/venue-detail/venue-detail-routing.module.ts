import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VenueDetailPage } from './venue-detail';

const routes: Routes = [
  {
    path: '',
    component: VenueDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VenueDetailPageRoutingModule { }
