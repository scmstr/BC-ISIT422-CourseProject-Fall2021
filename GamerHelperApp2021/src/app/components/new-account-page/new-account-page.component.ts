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
  newUsernameInput!:string;
  newPasswordInput!:string;
  confirmNewPasswordInput!:string;
  errorZone:string = "";
  isError:boolean = false;


  //to create a new user - WORKS
  CreateNewUser(pNewUsernameInput:string, pNewPasswordInput:string, pConfirmNewPasswordInput:string):void {
    this.errorZone = "";
    let passMatch = this.DoTheseStringsMatch(pNewPasswordInput, pConfirmNewPasswordInput);
    let isValidPass = this.IsValidPassword(pNewPasswordInput);
    let isValidUsername = this.IsValidUsername(pNewUsernameInput);
    



    if (!passMatch) {
      //if passwords dont match, throw error
      this.isError = true;
      this.errorZone += "Passwords dont match.";
    }

    if (!isValidUsername) {
      this.isError = true;
      this.errorZone += " Username is invalid. Username must be at least 4 characters long.";
    }

    if (!isValidPass) {
      this.isError = true;
      this.errorZone += " Password is invalid. Password must be at least 4 characters long.";
    }



    //if everything is good to go - try to create a new user
    if (isValidPass && isValidUsername && passMatch) {
      //success
      this.loginService.CreateNewUser(pNewUsernameInput, pNewPasswordInput)
        .subscribe(returnData => {
          console.log("create new user ran in component");

          if (returnData.message == "Successfully created new user!") {
            window.alert(returnData.message);
            console.log("seems to have succeeded? return data: ");
            console.log(returnData.message);
            this.router.navigate(['home']);
          }
          else
          {
            console.log("seems to have failed? return data: ");
            console.log(returnData.message);
            this.errorZone += String(returnData.message);
            this.isError = true;
          }

      
        }
      );
    }


  }
  

  //tests for valid username - WORKS (but uses stubs --> missing: regex for email and sanitize: IsValidPassword and IsEmailFormat)
  IsValidUsername(pUsernameInput:string):boolean {
    //username needs to be a valid email. try regular expressions. regex
    let isUndefinedOrNull = true;
    let isTooShort = true;
    let isInvalidCharacters = true;
    

    
    if (pUsernameInput != undefined && pUsernameInput != null) {  //this just makes it so reading legnth doesnt break
      isUndefinedOrNull = false;
    }

    if (pUsernameInput.length > 3) {
      isTooShort = false;
    }

    if (this.IsEmailFormat(pUsernameInput))
    {
      isInvalidCharacters = false;
    }



    if(!isTooShort && !isInvalidCharacters && !isUndefinedOrNull) {
      return true;
    }
    else
    {
      return false;
    }
  }


  //tests for valid password - STUB
  IsValidPassword(pPasswordInput:string):boolean {

    if (true) { //put test here for stripping password of usable code - using regex expression
      if (pPasswordInput.length > 3) {
        return true;
      }
      else {
        return false;
      }
    }    

  }


  //compare and match strings - WORKS
  DoTheseStringsMatch(pString1:string, pString2:string):boolean {
    if (pString1===pString2) {
      return true;
    }
    else
    {
      return false;
    }
  }
  

  //tests for valid email - STUB
  IsEmailFormat(pInputEmail:string):boolean {
    
    //need this to test for regex email type in the future.
    if(true) //   pInputEmail.match((/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)))
    {
      return true;
    }
    else
    {
      return false;
    }


  }





































}
