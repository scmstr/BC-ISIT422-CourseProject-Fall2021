
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




  //logs in the user and sets the session info - WORKS
  LogInThisUser(pUser:string, pPass:string):void {

    this.VerifyLogin(pUser, pPass)
      .subscribe(returnData => {
        console.log("verifyLogin ran in service.");

        //other code here that waits for the returned code to happen

        if (returnData.isValid) {
          //if login is valid...
          console.log("return data isValid is: ");
          console.log(returnData.isValid);
          this.loggedIn = true;

          this.loggedInUID = returnData.userID;
          console.log("return data UID is: ");
          console.log(returnData.userID);

          this.router.navigate(['/home']);
    

          return true;
        }
        else {
          //if login is NOT VALID...
          console.log("returndata.isvalid is: [" + returnData.isValid + "].");
          this.loggedIn = false;
          this.loggedInUID = -1;
          this.router.navigate(['/home']); //maybe have this send you to home, since theres a check there anyway?
          //send invalid login info notification here
          return false;
        }  
      }
    );

  }


  //actual method to query an endpoint (Node) to see if the entered user - WORKS
  VerifyLogin(pUsername:string, pPassword:string): Observable<LoginData>  {
    console.log("verifying user data....");
    return this.http.get<LoginData>('http://localhost:3000/verifyLogin/' + pUsername + "/" + pPassword);
    //return this.http.get<User>('OTHER ADDRESS/verifyLogin/' + pUsername + "/" + pPassword);
  }


  //attempt to create new user here - WORKS
  CreateNewUser(pUsername:string, pPassword:string):Observable<any> {
    console.log("CreateNewUser ran in login.service and took in this username and password");
    console.log(pUsername + ":" + pPassword);
    return this.http.get<any>('http://localhost:3000/createNewUser/' + pUsername + "/" + pPassword);
    //return this.http.get<User>('OTHER ADDRESS/createNewUser/' + pUsername + "/" + pPassword);
  }





}











