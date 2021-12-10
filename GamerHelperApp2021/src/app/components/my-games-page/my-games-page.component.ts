import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router'; //lets you do advanced stuff with routes (pull the "id" parameter from it)
import { Location } from '@angular/common'; //automagically keeps track of browser history (back function)

//imports, elswhere in app
import { LoginService } from 'src/app/services/login.service';
import { Game } from 'src/app/objectClasses/game';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/objectClasses/user';
import { first, firstValueFrom } from 'rxjs';
import { GameDetails } from 'src/app/objectClasses/game-details';
import { IGDBAPIService } from 'src/app/services/igdbapi.service';




@Component({
  selector: 'app-my-games-page',
  templateUrl: './my-games-page.component.html',
  styleUrls: ['./my-games-page.component.css']
})




export class MyGamesPageComponent implements OnInit {

  myGamesArray?: Game[];
  myGames1: any[] = [];
  myGamesClassArray: Game[] = [];
  myGameDetailsArray:GameDetails[] = [];
  
  // gameID?: Number = 0;    //i dont think these need to be here, but keeping them for now. might delete soon once i have a fresh head/not 2am
  // gameDateTime?: string;

  constructor(
    public loginService:LoginService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    public userService: UsersService,
    public IGDBService: IGDBAPIService,
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
    else
    {
      this.getMyGames();
    }
      

  }




  //this method's messiness is an artifact. It's currently functional, but can be RADICALLY cleaned up by looking at home-page-component.ts and the GetGameByID() method at/near bottom.
  getMyGames(): void {
    this.userService.GetMyGames(this.loginService.GetMyUID()) //this should be returning an observable<Game[]>
    .subscribe(myGames => {
      this.myGamesArray = myGames;

      //puts each game onto its own line
      for (let i = 0; i < myGames.length; i++) {
        this.myGames1.push(this.myGamesArray[i]);
      }

      //creates Game objects with the data
      for (let i = 0; i < this.myGames1.length; i++) {
        this.myGamesClassArray.push(new Game(this.myGames1[i][0], this.myGames1[i][1], this.myGames1[i][2]));
      }



    });
  }


}


