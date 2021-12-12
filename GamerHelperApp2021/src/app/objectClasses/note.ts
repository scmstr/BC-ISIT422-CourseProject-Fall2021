// export interface Note {
//     dateTime: string;
//     noteID: number;
//     noteContent: string;
//     UID: number;
//     gameID: number;
// }


export class Note {
  constructor(pDateTime:string, pNoteID:number, pNoteContent:string, pUID:number, pGameID:number){
    this.dateTime = pDateTime;
    this.noteID = pNoteID;
    this.noteContent = pNoteContent;
    this.UID = pUID;
    this.gameID = pGameID;
  }
  
  dateTime!: string;
  noteID!: number;
  noteContent!: string;
  UID!: number;
  gameID!: number;
}
  