import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { SignupPage } from "./signup";
import { SignupPageRoutingModule } from "./signup-routing.module";
import { ProfilePageModule } from "./../profile/profile.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupPageRoutingModule,
    ProfilePageModule
  ],
  declarations: [SignupPage]
})
export class SignUpModule {}
