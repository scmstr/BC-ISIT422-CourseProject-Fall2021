
//import, general
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';


//import, from elsewhere in app
import { Note } from '../objectClasses/note';
import { Message } from '../objectClasses/message';





@Injectable({
  providedIn: 'root'
})



export class NotesService {

  constructor(
    private http: HttpClient,
    ) { 

  }




  GetNote(gameID: number) {
    return this.http.get<Note>('http://localhost:3000/myGames/' + gameID)
  }


  DeleteNote(gameID: number): Observable<Message> {
    return this.http.delete<Message>('http://localhost:3000/myGames/'+ gameID);
  }


  AddNote(newNote: Note):Observable<Note> {
    return this.http.post<Note>('http://localhost:3000/addNote/', newNote);
  }

  UpdateNote(gameID: number, oneNote: Note) : Observable<Note>{
    return this.http.put<Note>('http://localhost:3000/myGames/' + gameID, oneNote)
  }



  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>('http://localhost:3000/myGames/' + sessionStorage.getItem('gameID'))
  }


  



  
  GetNotesForThisGameAndUser(pGameID:number, pUID:number):Observable<Note[]> {
    return this.http.get<Note[]>('http://localhost:3000/myNotes/' + pGameID + "/" + pUID)
  }


  
  ////in node...

  // app.get('/fruit/:fruitName/:fruitColor', function(req, res) {
  //   var data = {
  //     "fruit": {
  //       "apple": req.params.fruitName,
  //       "color": req.params.fruitColor
  //     }
  //   }; 


  //   //do your mongo pulldown stuff here
  //     //get ALL notes ...or -> (mongo should be smart, you may be able to just say "get all notes that have both desired UID and gameID")
  //     //go through every note with FOR, and check if UID matches on that note
  //       //if FK UID matches, check to see if pGameID matches
  //         //if those match, add that note to an array of notes
  //       //
  //     //
  //   //send.json(tempArrayOfNotes)

  //   send.json(data);
  // });


  //query node for this user's notes, filter by most recent 3 (need timestamps to work on note objects)

  
  GetLastThreeNotesForUser() {

  }












  
}
