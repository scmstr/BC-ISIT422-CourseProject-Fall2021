import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private router: Router,
  ) { 

  }



  //id?:number;
  loggedInUID: number = 2;  ///this is a fake.
  loggedIn?:boolean;

  CheckLogin() {
    if(this.loggedIn != true) {
      this.router.navigate(['/login']);
    }

    //


  }

  Logout() {
    this.loggedIn = false;
    this.router.navigate(['/login']);
  }

  //this is a fake
  GetMyUID(): number {
    return this.loggedInUID;
  }

  //test auth method
    //takes in userData object
    //sends it to node server                    <------------------node psuedocode starts here
      //node server gets that user from mongo via UID
      //compares inputPass to mongoPass
      //if matches, send back true to angular, which causes UID to save to login service/session data and loggedIn to change to true
      //if doesnt match, throw error



}
