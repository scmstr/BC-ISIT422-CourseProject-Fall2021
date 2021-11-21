
//imports, general
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//imports, from other places in app - >>> ALL DESIRED COMPONENTS MUST BE HERE TO BE USABLE AS A ROUTE!! <<<
import { GameDetailsPageComponent } from './components/game-details-page/game-details-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { MyGamesPageComponent } from './components/my-games-page/my-games-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NewAccountPageComponent } from './components/new-account-page/new-account-page.component';
import { NoteDetailsPageComponent } from './components/note-details-page/note-details-page.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { SearchPageComponent } from './components/search-page/search-page.component';

import { LoginService } from './services/login.service';




const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'myGames', component: MyGamesPageComponent },
  { path: 'game/:id', component: GameDetailsPageComponent },
  { path: 'newAccount', component: NewAccountPageComponent },
  { path: 'noteDetails', component: NoteDetailsPageComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'navbar', component: NavBarComponent },
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { 

}





