import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';
import { File } from '@ionic-native/file/ngx';

@Injectable({
  providedIn: 'root'
})
export class ConnectDatabaseService {

  constructor(
    private httpC: HttpClient,
    public userData: Users,
    public file: File
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
      console.log(res);
      if () {
        return false;
      } else {
        this.userData = Object.assign(new Users, res);
        return true;
      }
    });
    return false;
  }

}
