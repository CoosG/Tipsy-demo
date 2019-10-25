import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { VenueDetailPage } from "./venue-detail";
import { VenueDetailPageRoutingModule } from "./venue-detail-routing.module";
import { MapModule } from "./../map/map.module";
import { IonicModule } from "@ionic/angular";

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    VenueDetailPageRoutingModule,
    MapModule,
    FormsModule
  ],
  declarations: [VenueDetailPage]
})
export class VenueDetailModule {}
