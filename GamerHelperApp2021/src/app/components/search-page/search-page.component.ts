import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router'; //lets you do advanced stuff with routes (pull the "id" parameter from it)
import { Location } from '@angular/common'; //automagically keeps track of browser history (back function)

//imports, elswhere in app
import { LoginService } from 'src/app/services/login.service';

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

  
  searched?:boolean = false;

  Search() {
    this.searched = true;
  }










}
