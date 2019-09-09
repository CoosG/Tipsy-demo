import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { VenueListPage } from './venue-list';
import { VenueListPageRoutingModule } from './venue-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    VenueListPageRoutingModule
  ],
  declarations: [VenueListPage],
})
export class VenueListModule {}
