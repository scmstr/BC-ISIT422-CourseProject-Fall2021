import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../objectClasses/note';
import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})

class X{
  message: string | undefined;
}

export class NotesService {

  getNote(gameID: number) {
    return this.http.get<Note>('http://localhost:3000/myGames/' + gameID)
  }

  deleteNote(gameID: number): Observable<X> {
    return this.http.delete<X>('http://localhost:3000/myGames/'+ gameID);
  }

  updateNote(gameID: number , oneNote: Note) : Observable<Note>{
    return this.http.put<Note>('http://localhost:3000/myGames/' + gameID, oneNote)
  }

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>('http://localhost:3000/myGames/' + sessionStorage.getItem('gameID'))
  }

  constructor(private http: HttpClient) { }
}
