import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router'; //lets you do advanced stuff with routes (pull the "id" parameter from it)
import { Location } from '@angular/common'; //automagically keeps track of browser history (back function)

//imports, elswhere in app
import { LoginService } from 'src/app/services/login.service';
import { Game } from 'src/app/objectClasses/game';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/objectClasses/user';
import { first, firstValueFrom } from 'rxjs';




@Component({
  selector: 'app-my-games-page',
  templateUrl: './my-games-page.component.html',
  styleUrls: ['./my-games-page.component.css']
})




export class MyGamesPageComponent implements OnInit {

  myGamesArray?: Game[];
  myGames1: any[] = [];
  myGames2: any[] = [];
  // gameID?: Number = 0;    //i dont think these need to be here, but keeping them for now. might delete soon once i have a fresh head/not 2am
  // gameDateTime?: string;

  constructor(
    public loginService:LoginService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    public userService: UsersService,
  ) {this.loginService.CheckLogin();} //checks for auth, auto-logout if not auth





  ngOnInit(): void {
    this.loginService.CheckLogin();  //checks for auth, auto-logout if not auth
    this.getMyGames();
  }


  getMyGames(): void {
    this.userService.GetMyGames(this.loginService.GetMyUID()) //this should be returning an observable<Game[]>
    .subscribe(myGames => {
      this.myGamesArray = myGames;



      //////////////////////
      //////////this just strips the data from the Game objects, and it's pretty much a workaround until we figure out why we cant access the object or array properties correctly - 11/24/2021 2:00am
      //////////////////////
      for (let i = 0; i < myGames.length; i++) {
        this.myGames1.push(this.myGamesArray[i]);
      }

      for (let i = 0; i < this.myGames1.length; i++) {
        this.myGames2.push(this.myGames1[i][0]);
      }


      // console.log(this.myGamesArray);                           //and all these console logs are just to test, along with basically everything else under here. keep the comments until we either finish the app or figure out the problem, comments wont harm us. 
      // console.log(myGames);
      // console.log(this.myGames1);
      // console.log("and now myGames2 under");
      // console.log(this.myGames2);
    }
      ); //subscribe means "keep going with the code, but on the side, make a thing that waits until the previous stuff finishes, then do this stuff in parenthesis asyncronously"
    
    // this.userService.GetMyGames(this.loginService.GetMyUID()) //this should be returning an observable<Game[]>
    // .subscribe(
    //   myGames => this.myGames = myGames
    //   );
    //subscribe means "keep going with the code, but on the side, make a thing that waits until the previous stuff finishes, then do this stuff in parenthesis asyncronously"
    



    console.log("getmygames internal log");
    console.log(this.myGamesArray);
    console.log("getmygames internal data above");
  } // create this^          by reading ^ from the service
    //kinda like saying "if/when this observable completes, do this stuff"




}


