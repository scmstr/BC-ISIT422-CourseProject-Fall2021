import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http'; //lets you use HTTP services! IMPORTANT FOR USING NON-LOCAL DATA


//imports, elsewhere in app
import { User } from '../objectClasses/user';
import { NotificationsService } from './notifications.service';
import { Game } from '../objectClasses/game';
import { LoginService } from './login.service';


@Injectable({
  providedIn: 'root'
})
export class SteamworksService {

  constructor(
    public http: HttpClient,
    public notifications: NotificationsService,
    public loginService: LoginService,
  ) { }














}
