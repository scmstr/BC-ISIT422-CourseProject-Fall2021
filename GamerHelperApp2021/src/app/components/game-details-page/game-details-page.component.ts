import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router'; //lets you do advanced stuff with routes (pull the "id" parameter from it)
import { Location } from '@angular/common'; //automagically keeps track of browser history (back function)

//imports, elswhere in app
import { LoginService } from 'src/app/services/login.service';
import { Game } from 'src/app/objectClasses/game';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/objectClasses/user';

@Component({
  selector: 'app-game-details-page',
  templateUrl: './game-details-page.component.html',
  styleUrls: ['./game-details-page.component.css']
})
export class GameDetailsPageComponent implements OnInit {
game?: Game;
  constructor(
    public loginService:LoginService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    public UsersService: UsersService,
  ) 
  {
    if (!this.loginService.IsLoggedIn()) 
    {
      loginService.Logout(); //checks for auth, auto-logout if not auth
    }
  }    




  ngOnInit(): void {
    if (!this.loginService.IsLoggedIn())
      {
        this.loginService.Logout();
      }
  }



  //show all notes for this game upon first loading page

  //method that saves game to list -and enables NewNote button 

  //method that removes game from list -and disables NewNote button 


  //GetGameDetailsByID

/* deleteGame():void{
  const gameID = this.game?.gameID;
  this.UsersService.deleteGame(gameID)
} */





}
