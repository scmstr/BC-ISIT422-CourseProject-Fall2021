import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router'; //lets you do advanced stuff with routes (pull the "id" parameter from it)
import { Location } from '@angular/common'; //automagically keeps track of browser history (back function)

//imports, elswhere in app
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-new-account-page',
  templateUrl: './new-account-page.component.html',
  styleUrls: ['./new-account-page.component.css']
})
export class NewAccountPageComponent implements OnInit {

  constructor(
    public loginService:LoginService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
  ) {

  }




  ngOnInit(): void {
  }



  //vars
  newUsernameInput?:string;
  newPasswordInput?:string;
  confirmNewPasswordInput?:string;



  CreateNewUser(pNewUsernameInput?:string, pNewPasswordInput?:string, pConfirmNewPasswordInput?:string):void {

    if (pNewPasswordInput != pConfirmNewPasswordInput) {
      //if passwords dont match, throw error
      console.log("passwords dont match");
    }




    //read data from page
    //make sure input is valid (not blank, ?username is an email?, ?pass at least 6 chars?)
      //if not valid, throw error notification
      //if valid...
        //send it to node
          //node checks to see if it exists
            //if not, make a new user out of this
            //if already exists, send back error
      //
    //get back node stuff
      //if new user created, send back to login page
      //if user already exists, stay on page and throw error notification
    //


    if ((this.IsValidUsername(pNewUsernameInput)) && (this.IsValidPassword(pNewPasswordInput)) && (pNewPasswordInput === pConfirmNewPasswordInput)) {


      console.log("create new user SUCCESS");
      this.router.navigate(['/login']);
    }
    else {

      console.log("create new user FAILED");
    }

  }


  IsValidUsername(pUsernameInput?:string):boolean {
    //username needs to be a valid email. try regular expressions. regex

    
    if (pUsernameInput == undefined) {  //this just makes it so reading legnth doesnt break
      pUsernameInput = "";
      console.log("username set to blank");
    }

    if (pUsernameInput.length > 0) {
      return true;
    }
    else
    {
      return false;
    }

  }


  IsValidPassword(pPasswordInput?:string):boolean {
    //password needs to be valid password, too. use regular expressions. regex

    // if (pPasswordInput !=undefined) {
      
    // }

    return true;
  }


  





















































}
