import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router'; //lets you do advanced stuff with routes (pull the "id" parameter from it)
import { Location } from '@angular/common'; //automagically keeps track of browser history (back function)

//imports, elswhere in app
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-note-details-page',
  templateUrl: './note-details-page.component.html',
  styleUrls: ['./note-details-page.component.css']
})
export class NoteDetailsPageComponent implements OnInit {

  noteContentInput!:string;


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


  //variables
  gameName = this.route.snapshot.paramMap.get('gameName')?.substring(1);
  gameID = Number(this.route.snapshot.paramMap.get('gameID')?.substring(1));



  ngOnInit(): void {
    if (!this.loginService.IsLoggedIn())
    {
      this.loginService.Logout();
    }





  }


  SaveNote(pNoteContent:string) {


  }



  //Number(this.route.snapshot.paramMap.get('id')?.substring(1))

}
