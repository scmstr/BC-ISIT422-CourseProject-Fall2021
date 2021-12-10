export class LoginData {
    constructor (pIsValid:boolean, pUID:number) {
        this.isValid = pIsValid;
        this.UID = pUID;
    }
    
    isValid!:boolean;
    UID!:number;
}