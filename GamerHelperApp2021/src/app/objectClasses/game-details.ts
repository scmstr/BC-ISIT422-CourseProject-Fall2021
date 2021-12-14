export class GameDetails {

    constructor(pGameID:number, pReleaseDate:Date, pGameName:string, pGameRating:string, pGameSummary:string,pGameURL:string) {
        this.gameID = pGameID;
        this.releaseDate = pReleaseDate;
        this.gameName = pGameName;
        this.gameRating = pGameRating;
        this.gameSummary = pGameSummary;
        this.gameURL = pGameURL;
    }

    gameID!: number;
    releaseDate!: Date;
    gameName!: string;
    gameRating!: string;
    gameSummary!: string;
    gameURL!: string;
}
