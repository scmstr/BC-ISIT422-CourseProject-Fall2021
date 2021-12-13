
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
    //return this.http.get<User>('OTHER ADDRESS/myGames' + userID);
  }


  //add new game to a user's list
  AddGame(userID: number, aGame:GameDetails): Observable<any> {
    console.log("add game service ran");
    console.log("the game the service is trying to send up in JSON is: ");
    console.log(JSON.stringify(aGame));
    return this.http.get<any>('http://localhost:3000/addGame/' + userID + "/" + aGame.gameID + "/" + aGame.gameName);
  }

  
  //delete a game from user's list
  DeleteGame(userID: number): Observable<Message> {
    console.log("delete game service ran");
    return this.http.delete<Message>('http://localhost:3000/myGames/' + userID);
  }


  //for add/remove to/from myGames list in node. to see if there should be an ADD or REMOVE button. Also to see if "write note" button is available.
  IsGameInMyList(pGameID:number, pUserID:number):Observable<boolean> {
    console.log("IsGameInMyList in user.service ran.");
    return this.http.get<boolean>('http://localhost:3000/isGameInMyGames/' + pGameID + "/" + pUserID);
  }
 



  //incomplete
  ConvertGameToGameDetails(pGameObj:Game):GameDetails {
    let gameDetailsOutput: GameDetails = {} as GameDetails;

    this.igdb.GetGameByID(pGameObj.gameID)
      .subscribe(returnData => {
        gameDetailsOutput = new GameDetails(returnData.gameID, returnData.releaseDate, returnData.gameName, returnData.gameRating, returnData.gameSummary, returnData.gameURL);


        console.log("returnData: " + returnData);
      }
    );
        

    return gameDetailsOutput;
  }



  //incomplete
  ConvertGameDetailsToGame(pGameDetailsObj:GameDetails):Game {
    let gameOutput: Game = new Game(pGameDetailsObj.gameID, "TIMESTAMPHERE", pGameDetailsObj.gameName);
    

    return gameOutput;
  }



  



}








