
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

import { ConnectDatabaseService } from './../../uploads/shared/connect-database.service';
import { Users } from '../../uploads/shared/users';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})

export class LoginPage implements OnInit {

  submitted = false;
  username = '';
  password = '';

  ngOnInit() {
  }

  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
    public connectDB: ConnectDatabaseService,
    public user: Users,
    public httpC: HttpClient

  ) { }

  login() {
    try {
      this.httpC.get('http://tipsyws/api/user/' + this.username ).subscribe( (res) => {
        console.log(res[0].u_FirstName, res[0].u_Email, res[0].u_LastName, res[0].u_Password);
        if (res[0].u_Email === this.username) {
          this.user.u_Email = res[0].u_Email;
          this.user.u_FirstName = res[0].u_FirstName;
          this.user.u_LastName = res[0].u_LastName;
          this.user.u_Password = res[0].u_Password;
          console.log('Found!', this.user.u_FirstName);
          if (this.user.u_Password === this.password) {
            console.log('Welcome' + this.user.u_FirstName);
            this.router.navigateByUrl('/app/tabs/schedule');
          } else {console.log('Password does not match'); }
        }
      });
    } catch (err) {
      console.log('User does not exist');
    }
  }
}
