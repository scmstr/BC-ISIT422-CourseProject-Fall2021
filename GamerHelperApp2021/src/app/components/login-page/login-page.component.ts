
//imports, general
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; //lets you do advanced stuff with routes (pull the "id" parameter from it)
import { Location } from '@angular/common'; //automagically keeps track of browser history (back function)

//imports, elsewhere in app
import { AppComponent } from 'src/app/app.component';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(
    public loginService:LoginService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
  ) {this.loginService.CheckLogin();}

  ngOnInit(): void {
    this.loginService.CheckLogin();
  }


  LogIn(): void {
    this.loginService.loggedIn = true;
    this.router.navigate(['/home']);

    //get user input from html boxes

    //run testauth method
      //create object with inputData
      //runs TestAuth(inputData) through login service

    //if true, navigate home

    //if false, error!

  }

















}
