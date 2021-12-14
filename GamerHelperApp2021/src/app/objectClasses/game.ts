// export interface Game {
//     gameID: number;
//     dateTime: string;
//   }

  export class Game {

    constructor (pGameID:number, pDateTime:Date, pGameName?:string) {
      this.gameID = pGameID;
      this.dateTime = pDateTime;
      this.gameName = pGameName;
    }



    gameID!: number;
    dateTime!: Date; //needs to become a timestamp
    gameName?: string;

  }