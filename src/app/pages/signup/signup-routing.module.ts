import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SignupPage } from "./signup";
import { ProfilePage } from "../profile/profile.page";

const routes: Routes = [
  {
    path: "",
    component: SignupPage
  },
  {
    path: "profile",
    component: ProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupPageRoutingModule {}
