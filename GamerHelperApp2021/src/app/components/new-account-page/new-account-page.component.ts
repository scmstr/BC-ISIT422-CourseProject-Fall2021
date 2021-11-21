import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router'; //lets you do advanced stuff with routes (pull the "id" parameter from it)
import { Location } from '@angular/common'; //automagically keeps track of browser history (back function)

//imports, elswhere in app
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-new-account-page',
  templateUrl: './new-account-page.component.html',
  styleUrls: ['./new-account-page.component.css']
})
export class NewAccountPageComponent implements OnInit {

  constructor(
    public loginService:LoginService
  ) {}

  ngOnInit(): void {
  }

}
