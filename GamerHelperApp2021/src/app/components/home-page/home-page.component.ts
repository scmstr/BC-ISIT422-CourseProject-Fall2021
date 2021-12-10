import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router'; //lets you do advanced stuff with routes (pull the "id" parameter from it)
import { Location } from '@angular/common'; //automagically keeps track of browser history (back function)
import { Observable, of } from 'rxjs';

//imports, elswhere in app
import { LoginService } from 'src/app/services/login.service';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Router } from '@angular/router';
import { IGDBAPIService } from 'src/app/services/igdbapi.service';
import { GameDetails } from 'src/app/objectClasses/game-details';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(
    public loginService:LoginService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    public igdb: IGDBAPIService,
    ) 
    {
      if (!this.loginService.IsLoggedIn()) 
      {
        loginService.Logout(); //checks for auth, auto-logout if not auth
      }
  }    
  

  showMe:boolean = false;
  ChangeShowMe() {
    !this.showMe
    console.log("showme ran");
  }




  aGame: GameDetails = {} as GameDetails;

  ngOnInit(): void {
    if (!this.loginService.IsLoggedIn())
    {
      this.loginService.Logout();

    }  

    
    this.igdb.GetGameByID(231)
    .subscribe (returnData => {
      this.aGame = new GameDetails(returnData[0].id, returnData[0].first_release_date, returnData[0].name, returnData[0].rating, returnData[0].summary, returnData[0].url);
    })
    

  }






  


  




}
