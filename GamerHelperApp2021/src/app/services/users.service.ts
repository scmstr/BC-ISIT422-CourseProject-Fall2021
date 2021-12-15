
//imports, general
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http'; //lets you use HTTP services! IMPORTANT FOR USING NON-LOCAL DATA


//imports, elsewhere in app
import { User } from '../objectClasses/user';
import { NotificationsService } from './notifications.service';
import { Game } from '../objectClasses/game';
import { LoginService } from './login.service';
import { Message } from '../objectClasses/message';
import { GameDetails } from '../objectClasses/game-details';
import { IGDBAPIService } from './igdbapi.service';



@Injectable({
  providedIn: 'root'
})


export class UsersService {

  constructor(
    public http: HttpClient,
    public notifications: NotificationsService,
    public loginService: LoginService,
    public igdb: IGDBAPIService,
  ) { }

  //make sure to change http addresses to https for azure!!!!! (not .http. classes!) IN ALL ANGULAR ADDRESSES!!!! not just here in users.service!
  //azure requires https!
  //other libraries/external addresses need to be https, too (bootstrap, whatever)


  //get the username of this user, to show welcome message - WORKS
  GetMyUsername():Observable<any> {
    if (this.loginService.IsLoggedIn()) {
      return this.http.get<any[]>('http://localhost:3000/getMyUsername/' + this.loginService.GetMyUID());
      //return this.http.get<any[]>('https://isit422nodeserver.azurewebsites.net/getMyUsername/' + this.loginService.GetMyUID());
    }
    else
    {
      let temp1:Observable<any> = {} as Observable<any>;
      return temp1;
    }
  }


  //gets all games for a single user - WORKS
  GetMyGames(userID:number): Observable<any[]> {
    console.log("getmygames service ran");
    return this.http.get<any[]>('http://localhost:3000/getMyGames/' + userID);
    //return this.http.get<any[]>('https://isit422nodeserver.azurewebsites.net/myGames' + userID);
  }


  //add new game to a user's list - WORKS WITH ERRORS
  AddGame(pUserID: number, pGameID:number, pGameName:string): Observable<any> {
    console.log("add game method in user.service just ran.");
    return this.http.get<any>('http://localhost:3000/addGame/' + pUserID + "/" + pGameID + "/" + pGameName);
    //return this.http.get<any>('https://isit422nodeserver.azurewebsites.net/addGame/' + pUserID + "/" + pGameID + "/" + pGameName);
  }


  //delete a game from user's list - WORKS
  DeleteGame(pUserID: number, pGameID: number): Observable<any> {
    console.log("delete game service ran");
    return this.http.get<any>('http://localhost:3000/deleteGame/' + pUserID + "/" + pGameID);
    //return this.http.get<any>('https://isit422nodeserver.azurewebsites.net/deleteGame/' + pUserID + "/" + pGameID);
  }


  //for add/remove to/from myGames list in node. to see if there should be an ADD or REMOVE button. Also to see if "write note" button is available. - WORKS
  IsGameInMyGames(pGameID:number, pUserID:number):Observable<any> {
    console.log("IsGameInMyList in user.service ran.");
    return this.http.get<any>('http://localhost:3000/isGameInMyGames/' + pGameID + "/" + pUserID);
    //return this.http.get<any>('https://isit422nodeserver.azurewebsites.net/isGameInMyGames/' + pGameID + "/" + pUserID);
  }
  
}








