import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router'; //lets you do advanced stuff with routes (pull the "id" parameter from it)
import { Location } from '@angular/common'; //automagically keeps track of browser history (back function)

//imports, elswhere in app
import { LoginService } from 'src/app/services/login.service';
import { NotesService } from 'src/app/services/notes.service';

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
    public noteService:NotesService,
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


  //createNewNote gameid, notecontent - WORKS
  SaveNote() {
    this.noteService.CreateNewNote(this.gameID.toString(), this.noteContentInput)
      .subscribe(returnData => {
        console.log("create new note ran in component.")

        this.router.navigateByUrl('/RefreshComponent2', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/game/:' + Number(this.route.snapshot.paramMap.get('gameID')?.substring(1))]);
        });



      }
    )
  }




}
