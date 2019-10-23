
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

import { UserData } from '../../providers/user-data';




@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})

export class LoginPage implements OnInit {
  submitted = false;

  username = '';
  password = '';

  constructor(
    public afAuth: AngularFireAuth,
    public userData: UserData,
    public router: Router,

  ) { }

async login() {
    try {
      //const res = await this.afAuth.auth.signInWithEmailAndPassword(username + '@codedamn.com', password);
    } catch (err) {
      console.dir(err);
      if (err.code === 'auth/user-not-found') {
        console.log('User not found');
      }
    }
  }


  ngOnInit() {
  }

  // async Login(form: NgForm) {
  //   const { username, password } = this;
  //   try {
  //     const res = await this.afAuth.auth.signInWithEmailAndPassword(username + '@hack.com' , password);
  //     this.submitted = true;

  //     if (form.valid) {
  //       this.router.navigateByUrl('/app/tabs/schedule');
  //     }

  //   } catch (err) {
  //     console.dir(err);
  //     if (err.code === 'auth/user-not-found') {
  //       console.log('User not found');
  //     }
  //   }
  // }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
