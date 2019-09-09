import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VenueDetailPage } from './venue-detail';
import { VenueDetailPageRoutingModule } from './venue-detail-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    VenueDetailPageRoutingModule
  ],
  declarations: [
    VenueDetailPage,
  ]
})
export class VenueDetailModule { }
