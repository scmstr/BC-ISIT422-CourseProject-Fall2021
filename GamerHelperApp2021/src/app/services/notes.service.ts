
//import, general
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';


//import, from elsewhere in app
import { Note } from '../objectClasses/note';
import { Message } from '../objectClasses/message';
import { LoginService } from './login.service';





@Injectable({
  providedIn: 'root'
})



export class NotesService {

  constructor(
    private http: HttpClient,
    public loginService: LoginService,
    ) { 

  }


  //NEW note - WORKS
  CreateNewNote(pGameID:string, pNoteContent:string):Observable<any> {
    return this.http.get<any>('http://localhost:3000/createNote/' + pGameID + "/" + this.loginService.GetMyUID() + "/" + pNoteContent);
  }


  //GET ALL notes - WORKS
  GetNotesForThisGameAndUser(pGameID:number, pUserID:number):Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/getNotesForThisGameAndUser/' + pGameID + "/" + pUserID)
  }


  //GET LAST THREE notes - WORKS
  GetLastThreeNotesForUser():Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/getLastThreeNotesForUser/' + this.loginService.GetMyUID())
  }


  //Sorts notes chronologically - WORKS
  NoteSorter( a:Note, b:Note ) {
    if ( a.dateTime < b.dateTime ){
      return 1;
    }
    if ( a.dateTime > b.dateTime ){
      return -1;
    }
    return 0;
  }



  
}
