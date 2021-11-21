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
  id: number = 2;  ///this is a fake.
  loggedIn?:boolean;

  CheckLogin() {
    if(this.loggedIn != true) {
      this.router.navigate(['/login']);
    }
  }

  Logout() {
    this.loggedIn = false;
    this.router.navigate(['/login']);
  }

  //this is a fake
  GetMyUID(): number {
    return this.id;
  }



}
