import { MapPage } from "./../map/map";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { VenueDetailPage } from "./venue-detail";

const routes: Routes = [
  {
    path: "",
    component: VenueDetailPage
  },
  {
    path: "map",
    component: MapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VenueDetailPageRoutingModule {}
