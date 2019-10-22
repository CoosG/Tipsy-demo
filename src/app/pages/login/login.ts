import { Component, ViewEncapsulation, OnInit } from "@angular/core";

import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";

import { UserData } from "../../providers/user-data";

import { UserOptions } from "../../interfaces/user-options";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { HttpBackend } from "@angular/common/http";

@Component({
  selector: "page-login",
  templateUrl: "login.html",
  styleUrls: ["./login.scss"]
})
export class LoginPage implements OnInit {
  submitted = false;

  constructor(
    public afAuth: AngularFireAuth,
    public userData: UserData,
    public router: Router
  ) {}

  ngOnInit() {}

  onSignup() {
    this.router.navigateByUrl("/login");
  }
}
