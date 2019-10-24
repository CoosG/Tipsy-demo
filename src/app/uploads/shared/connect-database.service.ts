import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';
import { File } from '@ionic-native/file/ngx';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ConnectDatabaseService {

  public arr: Users[];

  constructor(
    private httpC: HttpClient,
    public file: File,
    public userData: Users
  ) { }

  addUser(user: Users) {
    this.httpC.post('http://tipsyws/api/user/add',
    `{
      "u_FirstName" : "` + user.u_FirstName + `",
      "u_LastName" : "` + user.u_LastName + `",
      "u_Email" : "` + user.u_Email + `",
      "u_Password" : "` + user.u_Password + `",
      "u_Longitude" : "2",
      "u_Latitude" : "2"
   }`,
   {headers: {'Content-Type': 'application/json'}}
   ).subscribe((res) => {
      console.log(res);
    });
  }

  returnUserData(userMail) {

    this.httpC.get('http://tipsyws/api/user/' + userMail ).subscribe((res) => {
      console.log(res[0].u_FirstName, res[0].u_Email, res[0].u_LastName, res[0].u_Password);
      if (res[0].u_Email === userMail) {
        this.userData.u_Email = res[0].u_Email;
        this.userData.u_FirstName = res[0].u_FirstName;
        this.userData.u_LastName = res[0].u_LastName;
        this.userData.u_Password = res[0].u_Password;
        console.log('Found!', this.userData.u_FirstName);
        return Promise.resolve(this.userData);
      } else {
        return Promise.resolve(this.userData);
      }
    });
    return Promise.resolve(this.userData);
  }

  voorbeeld(num) {
    console.log('eerste');
    const vb = 1;
    return vb + num;
  }

}
