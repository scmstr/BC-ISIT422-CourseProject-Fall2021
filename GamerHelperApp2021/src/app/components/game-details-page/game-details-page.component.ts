
//imports, general
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; //lets you do advanced stuff with routes (pull the "id" parameter from it)
import { Location } from '@angular/common'; //automagically keeps track of browser history (back function)

//imports, elswhere in app
import { LoginService } from 'src/app/services/login.service';
import { Game } from 'src/app/objectClasses/game';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/objectClasses/user';
import { retryWhen } from 'rxjs';
import { GameDetails } from 'src/app/objectClasses/game-details';
import { IGDBAPIService } from 'src/app/services/igdbapi.service';
import { Note } from 'src/app/objectClasses/note';
import { NotesService } from 'src/app/services/notes.service';



@Component({
  selector: 'app-game-details-page',
  templateUrl: './game-details-page.component.html',
  styleUrls: ['./game-details-page.component.css']
})




export class GameDetailsPageComponent implements OnInit {



  gameResults: GameDetails = {} as GameDetails;
  noteResults: Note[] = {} as Note[];
  //isInList:boolean = {} as boolean;
  isInList:boolean = false;


  constructor(
    public loginService:LoginService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    public usersService: UsersService,
    public igdb: IGDBAPIService,
    public noteService: NotesService,
  ){
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
   



    //show all notes for this game upon first loading page
    this.igdb.GetGameByID(Number(this.route.snapshot.paramMap.get('id')?.substring(1))) //Number(this.route.snapshot.paramMap.get('id'))
      .subscribe(returnData => {
        this.gameResults = new GameDetails(returnData[0].id, returnData[0].first_release_date, returnData[0].name, returnData[0].rating, returnData[0].summary, returnData[0].url);
        



        //now get the notes from Node.JS server  (and thus mongo) for this gameID and UID
        this.noteService.GetNotesForThisGameAndUser(Number(this.route.snapshot.paramMap.get('id')?.substring(1)), this.loginService.GetMyUID())
          .subscribe(returnData2 =>{

            console.log("return data 2 content: " + returnData2);

            this.noteResults = [];
            this.noteResults.pop();

            returnData2.forEach(note => {
              this.noteResults.push(new Note(returnData2[0].userID, returnData2[0].gameID, returnData2[0].noteID, returnData2[0].dateTime, returnData2[0].noteContent, ));
            });

            console.log("note results: " + this.noteResults);
          }

        );

      }   

    );

    this.usersService.IsGameInMyList(Number(this.route.snapshot.paramMap.get('id')?.substring(1)), this.loginService.GetMyUID())
      .subscribe(returnData => {
        this.isInList = false;
        this.isInList = returnData;
      }
    )









  }






  AddToMyGames(pGameID:number) {
    //userService.add this gameID to the user's list
    //send you to my-games page
  }


  RemoveFromMyGames(pGameID:number) {
    //userService.remove this gameID from the user's lsit
    //send you do my-games page
  }











  

  //method that saves game to list -and enables NewNote button 

  //method that removes game from list -and disables NewNote button 


  //GetGameDetailsByID

  /* deleteGame():void{
    const gameID = this.game?.gameID;
    this.UsersService.deleteGame(gameID)
  } */





}
