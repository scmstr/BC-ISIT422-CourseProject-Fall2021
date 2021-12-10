
//imports, general
import { Component } from '@angular/core';

//imports, elsewhere in app
import { LoginService } from './services/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'GamerHelperApp2021';

  constructor(
    public loginService:LoginService
  ) {

  }
  
















  

}


