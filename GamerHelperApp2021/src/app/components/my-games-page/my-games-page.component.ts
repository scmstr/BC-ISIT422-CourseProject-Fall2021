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
import { Note } from 'src/app/objectClasses/note';
import { NotesService } from 'src/app/services/notes.service';




@Component({
  selector: 'app-my-games-page',
  templateUrl: './my-games-page.component.html',
  styleUrls: ['./my-games-page.component.css']
})




export class MyGamesPageComponent implements OnInit {

  myGames: GameDetails[] = {} as GameDetails[];


  constructor(
    public loginService:LoginService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    public userService: UsersService,
    public igdb: IGDBAPIService,
    public NotesService: NotesService,
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
      this.GetMyGamesNow();
    }
    

  }




  //this method's messiness is an artifact. It's currently functional, but can be RADICALLY cleaned up by looking at home-page-component.ts and the GetGameByID() method at/near bottom.
  GetMyGamesNow(): void {
    this.userService.GetMyGames(this.loginService.GetMyUID()) //this should be returning an observable<Game[]>
    .subscribe(returnedGames => {
      this.myGames = [];

      //creates Game objects with the data
      for (let i = 0; i < returnedGames.length; i++) {
        this.igdb.GetGameByID(returnedGames[i][0])
          .subscribe(returnedGame => {
            this.myGames.push(new GameDetails(returnedGame[0].id, returnedGame[0].first_release_date, returnedGame[0].name, returnedGame[0].rating, returnedGame[0].summary, returnedGame[0].url));
            //sort by timestamp here to make list of games appear by "most recently played"
          }
        );


      }
    }
    );
  }









































  
  /*  deleteGame(): void{

    const gameID = this.game?.gameID;
    this.userService.deleteGame(gameID)
    .subscribe(data => console.log(data.message));

  } */



  /* saveNote(): void{
    this.NotesService.updateNote(this.game?.gameID, this.game)
    .subscribe(data => console.log(data));
  } */





}