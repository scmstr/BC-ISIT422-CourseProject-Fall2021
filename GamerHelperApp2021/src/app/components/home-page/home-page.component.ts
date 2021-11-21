import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router'; //lets you do advanced stuff with routes (pull the "id" parameter from it)
import { Location } from '@angular/common'; //automagically keeps track of browser history (back function)
import { Observable, of } from 'rxjs';

//imports, elswhere in app
import { LoginService } from 'src/app/services/login.service';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Router } from '@angular/router';

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
  ) {this.loginService.CheckLogin();}

  
  
  

  ngOnInit(): void {
    this.loginService.CheckLogin();
  }




}
