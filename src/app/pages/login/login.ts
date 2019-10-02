import { AngularFireAuth } from '@angular/fire/auth';
import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  submitted = false;
  username: string;
  password: string;
  constructor(
    //public afAuth: AngularFireAuth,
    public userData: UserData,
    public router: Router,

  ) { }

async login() {
    const{username, password} = this;
    try {
      //const res = await this.afAuth.auth.signInWithEmailAndPassword(username + '@codedamn.com', password);
    } catch (err) {
      console.dir(err);
      if (err.code === 'auth/user-not-found') {
        console.log('User not found');
      }
    }
  }

onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
