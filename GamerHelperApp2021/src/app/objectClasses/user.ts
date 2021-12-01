import { GameDetailsPageComponent } from "../components/game-details-page/game-details-page.component";
import { Game } from "./game";

// export interface User {
//     UID: number;
//     username: string;
//     myGames: Game[];
//   }

export class User {
  UID!: number;
  username!: string;
  password!: string;
  myGames!: Game[];
}