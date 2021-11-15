import { User } from './user';
import { Game } from './game';
import { Note } from './note';



//test array for users
export const userData: User[] = [
  { userID: 1, userName: "potatoUser1" , myGames: [1, 5, 9, 184, 833, 2323, 123]},
  { userID: 2, userName: "potatoUser2" , myGames: [1111, 5555, 254] },
  { userID: 3, userName: "potatoUser3" , myGames: [1333, 5, 157] }
];


//test array for games 
export const games: Game[] = [
  { id: 1, gameName: 'game1', coverArt: "COVERARTHERE", releaseDate: "RELEASEDATEHERE", communityRating: "COMMUNITYRATINGHERE", summary: "SUMMARYHERE", gameURL: "GAMEURLHERE", gameWebsite: "GAMEWEBSITEHERE"},
  { id: 2, gameName: 'game2', coverArt: "COVERARTHERE", releaseDate: "RELEASEDATEHERE", communityRating: "COMMUNITYRATINGHERE", summary: "SUMMARYHERE", gameURL: "GAMEURLHERE", gameWebsite: "GAMEWEBSITEHERE"},
  { id: 3, gameName: 'game3', coverArt: "COVERARTHERE", releaseDate: "RELEASEDATEHERE", communityRating: "COMMUNITYRATINGHERE", summary: "SUMMARYHERE", gameURL: "GAMEURLHERE", gameWebsite: "GAMEWEBSITEHERE"},
  { id: 4, gameName: 'game4', coverArt: "COVERARTHERE", releaseDate: "RELEASEDATEHERE", communityRating: "COMMUNITYRATINGHERE", summary: "SUMMARYHERE", gameURL: "GAMEURLHERE", gameWebsite: "GAMEWEBSITEHERE"},
  { id: 5, gameName: 'game5', coverArt: "COVERARTHERE", releaseDate: "RELEASEDATEHERE", communityRating: "COMMUNITYRATINGHERE", summary: "SUMMARYHERE", gameURL: "GAMEURLHERE", gameWebsite: "GAMEWEBSITEHERE"}
];









//replace this shitty made-up date format with real date format later
//
//             year mm dd   hh  min  sec
//date format: 2021 12 31   24  60   60
//

//test array for notes (dates schema still needs formatting help to have real date format)
export const myNotes: Note[] = [
  { id: 1, userID: 1, gameID: 1, noteContent: 'in game 1, I farted on a chicken', noteDate: 20211109140816 },
  { id: 2, userID: 1, gameID: 5, noteContent: 'in game 5, i rolled a rock down a hill and tried to jump to the moon', noteDate: 20211109140816 },
  { id: 3, userID: 1, gameID: 5, noteContent: 'in game 5, i jumped to the moon and dug up some potatoes', noteDate: 20211109140816 }
];


