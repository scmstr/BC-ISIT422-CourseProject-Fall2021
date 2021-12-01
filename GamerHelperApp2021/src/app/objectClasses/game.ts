// export interface Game {
//     gameID: number;
//     dateTime: string;
//   }

  export class Game {
    constructor (pGameID:number, pDateTime:string, pGameName?:string) {
      this.gameID = pGameID;
      this.dateTime = pDateTime;
      this.gameName = pGameName;
    }
    gameID!: number;
    dateTime!: string; //needs to become a time timestamp
    gameName?: string;
  }