
//imports, general
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http'; //lets you use HTTP services! IMPORTANT FOR USING NON-LOCAL DATA


//imports, elsewhere in app
import { LoginData } from 'src/app/objectClasses/login-data';





@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private router: Router,
    private http: HttpClient,
  ) { 

  }



  ////login variables
  private loggedInUID: number = -1;
  private loggedIn:boolean = false;  //private, so its harder for hackers to get to. not much, but still not as easy.||||| if -1, is not logged in.


  IsLoggedIn():boolean {
    if(this.loggedIn === true) {
      return true;
    }
    else
    {
      return false;
    }
  }


  Logout() {
    this.loggedIn = false;
    this.loggedInUID = -1;
    this.router.navigate(['/login']);
  }


  GetMyUID(): number {
    return this.loggedInUID;
  }




  //this method gets in the data to test, tests it, sets the session info
  TestThisAuth(pUser:string, pPass:string):void {

    /////////////////////////////////
    ///////////DO NOT DELETE/////////
    /////////////////////////////////

    // this.VerifyLogin(pUser, pPass).subscribe(tempData => {
    //   let tempLoginData!:LoginData;
    //   tempLoginData = tempData;
    //   //other code here that waits for the returned code to happen

    //   if (tempLoginData.isValid) {
    //     //if login is valid...
    //     this.loggedIn = true;
    //     this.loggedInUID = tempLoginData.UID;
    //     this.router.navigate(['/home']);
  
    //     //send successfully logged in notification here
    //     return true;
    //   }
    //   else {
    //     //if login is NOT VALID...
    //     this.loggedIn = false;
    //     this.loggedInUID = -1;
    //     this.router.navigate(['/login']); //maybe have this send you to home, since theres a check there anyway?
    //     //send invalid login info notification here
    //     return false;
    //   }  
    // });


    //Testing STUB!!!
    //the above code chunk is the REAL ONE, below here is just for testing before the node/mongo stuff is made
    this.loggedIn = true;
    this.loggedInUID = Number(pUser);
    this.router.navigate(['/home']);


  }




  //test auth method
    //takes in user:pass
    //sends it to node server                    <------------------node psuedocode starts here
      //node server gets that user from mongo
      //compares inputPass to mongoPass
        //if matches, send back TRUE to angular, which causes UID to save to login service/session data and loggedIn to change to true
        //if doesnt match, throw error
  //




  //actual method to query an endpoint (Node) to see if the entered user:pass are valid
  VerifyLogin(pUsername:string, pPassword:string): Observable<LoginData>  {
    console.log("verifying user data....");
    return this.http.get<LoginData>('http://localhost:3000/verifyLogin/' + pUsername + "/" + pPassword);
    //return this.http.get<User>('OTHER ADDRESS/myGames' + userID);
  }









}











