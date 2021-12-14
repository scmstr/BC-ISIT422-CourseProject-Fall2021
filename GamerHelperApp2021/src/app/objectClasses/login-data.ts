export class LoginData {
    constructor (pIsValid:boolean, pUserID:number) {
        this.isValid = pIsValid;
        this.userID = pUserID;
    }

    isValid!:boolean;
    userID!:number;
}