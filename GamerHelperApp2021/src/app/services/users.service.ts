
//imports, general
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http'; //lets you use HTTP services! IMPORTANT FOR USING NON-LOCAL DATA


//imports, elsewhere in app
import { User } from '../objectClasses/user';
import { NotificationsService } from './notifications.service';
import { Game } from '../objectClasses/game';
import { LoginService } from './login.service';



class X{
  message: string | undefined;
}

@Injectable({
  providedIn: 'root'
})


export class UsersService {

  constructor(
    public http: HttpClient,
    public notifications: NotificationsService,
    public loginService: LoginService,
  ) { }

  //make sure to change http addresses to https for azure!!!!! (not .http. classes!) IN ALL ANGULAR ADDRESSES!!!! not just here in users.service!
  //azure requires https!
  //other libraries/external addresses need to be https, too (bootstrap, whatever)



  //gets all games for a single user
  GetMyGames(userID:number): Observable<Game[]>  {
    console.log("getmygames service ran");
    return this.http.get<Game[]>('http://localhost:3000/myGames/' + userID);
    //return this.http.get<User>('OTHER ADDRESS/myGames' + userID);
  }


  //add new game to a user's list
addGame(userID: number, gameID:number){
  console.log("add game service ran");
  return this.http.put<Game>('http://localhost:3000/myGames/' + userID , gameID)
}

  //
//delete a game from user's list
deleteGame(userID: number): Observable<X>{
  console.log("delete game service ran");
  return this.http.delete<X>('http://localhost:3000/myGames/' + userID);
}









}


