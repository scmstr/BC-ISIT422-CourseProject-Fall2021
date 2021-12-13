import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router'; //lets you do advanced stuff with routes (pull the "id" parameter from it)
import { Location } from '@angular/common'; //automagically keeps track of browser history (back function)

//imports, elswhere in app
import { LoginService } from 'src/app/services/login.service';
import { IGDBAPIService } from 'src/app/services/igdbapi.service';
import { GameDetails } from 'src/app/objectClasses/game-details';
import { User } from 'src/app/objectClasses/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})

export class SearchPageComponent implements OnInit {



  constructor(
    public loginService:LoginService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    public igdb: IGDBAPIService,
    public userService: UsersService,
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

  searchInput!:string;
  searched?:boolean = false;
  gameResults: GameDetails[] = {} as GameDetails[];


  Search(pSearchInput:string) {
    this.searched = false;

    this.igdb.GetSearchGamesByString(pSearchInput)
      .subscribe (returnData => {

        //init the array with garbage, then clear it
        this.gameResults = [];


        //load the array with the results
        for (let i = 0; i < returnData.length; i++) {
          this.gameResults.push(new GameDetails(returnData[i].id, returnData[i].first_release_date, returnData[i].name, returnData[i].rating, returnData[i].summary, returnData[i].url));
        }
        
        console.log("returnData Array here: ");
        console.log(returnData);

        console.log("gameResults Array here: ");
        console.log(this.gameResults);

        this.searched = true;
      }

    )

  }


  AddToMyGames(pAGame:GameDetails) {

    this.userService.IsGameInMyList(pAGame.gameID, this.loginService.GetMyUID())
      .subscribe(returnData => {

        //if this game isnt in this user's list, add it
        if (returnData == false) 
        {
          console.log("game was not in list. Running userService.AddGame()... ");
          this.userService.AddGame(this.loginService.GetMyUID(), pAGame)
            .subscribe(returnData => {
              console.log("message from node server: ")
              console.log(returnData);
            }
          );
        }
        else if(returnData == true)//if this game IS in this user's list
        {
          console.log("game is already in user's list.");
          //throw some sort of error or message because you shouldn't be able to run this method if the game is already in the list because there should be a check to enable visibility of any "add" button
        }

      }
    )


    console.log("AddToMyGames method in the component ran.");
  }

















}





