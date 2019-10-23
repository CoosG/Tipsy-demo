
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

import { ConnectDatabaseService } from './../../uploads/shared/connect-database.service';
import { Users } from '../../uploads/shared/users';



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
    public router: Router,
    public connectDB: ConnectDatabaseService,
    public user: Users

  ) { }

async login() {
    try {
      if (this.connectDB.returnUserData(this.username) === true) { // username exists
        this.user = this.connectDB.userData;

        if ( this.user.u_Password === this.password ) {
          this.router.navigateByUrl('/app/tabs/schedule');
          // add modal to welcome user
          return;
        }
        console.log('Username and password does not match.');

      } else {
        console.log('Username does not exist.');
      }

    } catch (err) {
      console.dir(err);
      if (err.code === 'auth/user-not-found') {
        console.log('User not found');
      }
    }
  }


  ngOnInit() {
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
