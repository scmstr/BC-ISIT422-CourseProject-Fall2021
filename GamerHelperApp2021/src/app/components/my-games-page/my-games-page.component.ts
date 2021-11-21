import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router'; //lets you do advanced stuff with routes (pull the "id" parameter from it)
import { Location } from '@angular/common'; //automagically keeps track of browser history (back function)

//imports, elswhere in app
import { LoginService } from 'src/app/services/login.service';
import { Game } from 'src/app/objectClasses/game';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/objectClasses/user';




@Component({
  selector: 'app-my-games-page',
  templateUrl: './my-games-page.component.html',
  styleUrls: ['./my-games-page.component.css']
})




export class MyGamesPageComponent implements OnInit {

  myGames: Game[] = [];

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
    .subscribe(myGames => this.myGames = myGames); //subscribe means "keep going with the code, but on the side, make a thing that waits until the previous stuff finishes, then do this stuff in parenthesis asyncronously"
    console.log(this.myGames);
  } // create this^          by reading ^ from the service
    //kinda like saying "if/when this observable completes, do this stuff"




}
