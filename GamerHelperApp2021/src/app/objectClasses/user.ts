import { GameDetailsPageComponent } from "../components/game-details-page/game-details-page.component";
import { Game } from "./game";

export interface User {
    UID: number;
    username: string;
    games: Game[];
  }