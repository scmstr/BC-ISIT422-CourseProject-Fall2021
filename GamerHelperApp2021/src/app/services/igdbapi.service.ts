
//imports, general
import { Injectable } from '@angular/core';
import { observable, Observable, of } from 'rxjs';
import { HttpClient, HttpClientModule, HttpContext, HttpHeaders, HttpParams, HttpParamsOptions } from '@angular/common/http'; //lets you use HTTP services! IMPORTANT FOR USING NON-LOCAL DATA



//imports, elsewhere in app
import { User } from '../objectClasses/user';
import { NotificationsService } from './notifications.service';
import { Game } from '../objectClasses/game';
import { LoginService } from './login.service';
import { GameDetails } from '../objectClasses/game-details';




@Injectable({
  providedIn: 'root'
})


export class IGDBAPIService {

  constructor(
    public http: HttpClient,
    public notifications: NotificationsService,
    public loginService: LoginService,
  ) { 
    
  }



  //SEARCH for a game, reuturns a list of games
  GetSearchGamesByString(SearchString: string): Observable<any>{
    let someHeader = new HttpHeaders().set("Authorization", "Bearer ofst5rsrnn9wlnbzkwmreiw4h014fl");
    someHeader = someHeader.append("Client-ID", "51hzf1cgu4unrfeuq3rmyz4t8d2s5y");
    return this.http.get("https://api.igdb.com/v4/games/?search=" + SearchString + "&limit=4&fields=first_release_date,name,rating,summary,url", {headers: someHeader})
    //return this.http.get("[CORS-EVERYWHERE-SERVER-ADDRESS-HERE]/https://api.igdb.com/v4/games/?search=" + SearchString + "&limit=4&fields=first_release_date,name,rating,summary,url", {headers: someHeader})
    //make sure to set these to https!!!!
  }
  

  //GET game details by GAME ID, returns a single game
  GetGameByID(SearchForThisGameID:number): Observable<any>{
    let someHeader = new HttpHeaders().set("Authorization", "Bearer ofst5rsrnn9wlnbzkwmreiw4h014fl");
    someHeader = someHeader.append("Client-ID", "51hzf1cgu4unrfeuq3rmyz4t8d2s5y");
    return this.http.get("http://localhost:8080/https://api.igdb.com/v4/games/" + SearchForThisGameID + "?fields=first_release_date,name,rating,summary,url", {headers: someHeader})
    //return this.http.get("[CORS-EVERYWHERE-SERVER-ADDRESS-HERE]/https://api.igdb.com/v4/games/" + SearchForThisGameID + "?fields=first_release_date,name,rating,summary,url", {headers: someHeader})
    //make sure to set these to https!!!!
  }


  








}


