
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
  ) {
    this.loginService.IsLoggedIn();
  
  }

  usernameInput!:string;
  passwordInput!:string;


  ngOnInit(): void {
    this.loginService.IsLoggedIn();
  }


  LogIn(): void {
    //////////////////
    ////old method////
    //////////////////
    //this.loginService.loggedIn = true;
    //this.router.navigate(['/home']);


    //////////////////
    ////new method////
    //////////////////


    if (this.usernameInput == undefined) {
      //if the username input is blank...

      this.router.navigate(['/home']);
      //send error notification saying that the username is blank
    }
    else {
      //if username is not blank...

      this.loginService.TestThisAuth(this.usernameInput, this.passwordInput);  //this method takes in the user:pass, sends it to node, gets back if it's valid or not, and either logs in the user or not.
    }



    
    
  }


  














}
