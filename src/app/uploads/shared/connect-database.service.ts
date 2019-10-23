import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class ConnectDatabaseService {

  constructor(
    private httpC: HttpClient
  ) { }

  addUser(user: Users) {
    this.httpC.post('http://tipsyws/api/user/add',
    `{
      "u_FirstName" : "` + user.uName + `",
      "u_LastName" : "` + user.uSurname + `",
      "u_Email" : "` + user.uEmail + `",
      "u_Password" : "` + user.uPassword + `",
      "u_Longitude" : "2",
      "u_Latitude" : "2"
   }`,
   {headers: {'Content-Type': 'application/json'}}
   ).subscribe((res) => {
      console.log(res);
    });
  }
}
