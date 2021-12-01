
//imports, general
import { Injectable } from '@angular/core';
import { observable, Observable, of } from 'rxjs';
import { HttpClient, HttpClientModule, HttpContext, HttpHeaders, HttpParams } from '@angular/common/http'; //lets you use HTTP services! IMPORTANT FOR USING NON-LOCAL DATA



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
  ) { }

  
  options!: {
    headers?: HttpHeaders|{[header: string]: string | string[]},
    context?: HttpContext,
    observe?: 'body'|'events'|'response',
    params?: HttpParams|
          {[param: string]: string | number | boolean | ReadonlyArray<string|number|boolean>},
    reportProgress?: boolean,
    responseType?: 'arraybuffer'|'blob'|'json'|'text',
    withCredentials?: boolean
  } 


  //gets the details for a gameID FROM IGDB API
  GetGameDetails(gameID:number): Observable<[]>  {
    console.log("igbapi service ran");
    return this.http.get<[]>('https://api.igdb.com/v4/games/' + gameID + '?fields=first_release_date,name,rating,summary,url'); //needs options
    


    // https://api.igdb.com/v4/games?client_id=51hzf1cgu4unrfeuq3rmyz4t8d2s5y&client_secret=xrmm4vlfi8g6ovud9zo0omnufv1kxn&grant_type=client_credentials
    // https://api.igdb.com/v4/games?client_id=51hzf1cgu4unrfeuq3rmyz4t8d2s5y&client_secret=xrmm4vlfi8g6ovud9zo0omnufv1kxn&grant_type=client_credentials
    // https://id.twitch.tv/oauth2/token?client_id=51hzf1cgu4unrfeuq3rmyz4t8d2s5y&client_secret=xrmm4vlfi8g6ovud9zo0omnufv1kxn&grant_type=client_credentials
  }


  


}


