
//imports, general
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //lets you do advanced stuff with routes (pull the "id" parameter from it)
import { Location } from '@angular/common'; //automagically keeps track of browser history (back function)

//imports, elsewhere in app
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})


export class NavBarComponent implements OnInit {

  constructor(
    public loginService:LoginService,
  ) 
  {

  }



  ngOnInit(): void {

  }



  Logout() {
    this.loginService.Logout();
  }




}
