// export interface Note {
//     dateTime: string;
//     noteID: number;
//     noteContent: string;
//     UID: number;
//     gameID: number;
// }


export class Note {
  constructor(pUserID:number, pGameID:number, pNoteID:number, pNoteContent:string, pDateTime:string){
    this.userID = pUserID;
    this.gameID = pGameID;
    this.noteID = pNoteID;
    this.noteContent = pNoteContent;
    this.dateTime = pDateTime;
  }
  
  userID!: number;
  gameID!: number;
  noteID!: number;
  noteContent!: string;
  dateTime!: string;
}
  