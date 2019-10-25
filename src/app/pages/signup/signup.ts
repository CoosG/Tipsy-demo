import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';
import { Users } from '../../uploads/shared/users';

import { UserOptions } from '../../interfaces/user-options';
import { AngularFireAuth } from '@angular/fire/auth';
import { ConnectDatabaseService } from './../../uploads/shared/connect-database.service';

import { GfencesService } from './../../uploads/shared/gfences.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
})
export class SignupPage implements OnInit {

  cPassword = '';
  submitted = false;



  ngOnInit() {
  }

  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
    public userData: UserData,
    public user: Users,
    public connectDB: ConnectDatabaseService,
    private GfencesService: GfencesService,
    public toastController: ToastController
  ) {}

  async openToast(){
    let msg = this.GfencesService.calculateDistance();

    const toast = await this.toastController.create({
      message: msg ,
      duration: 5000
    });
    toast.present();
  }
  async onSignup(form: NgForm) {

    if (this.user.uPassword !== this.cPassword) {
      return console.error('Passwords don\'t match');
    }

    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword( this.user.uEmail, this.user.uPassword);
      console.log(res);
    } catch (err) {
      console.dir(err);
    }

    this.submitted = true;

    if (form.valid) {
      this.connectDB.addUser(this.user);
      this.router.navigateByUrl('/app/tabs/schedule');
    }
  }
}
