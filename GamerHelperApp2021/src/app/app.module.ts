
//imports, general
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'; //lets you use HTTP services! IMPORTANT FOR USING NON-LOCAL DATA!!   ////////////////////----------/////////////////////// HTTP HERE!!!!!!!!!!!!
//                                                                 // Also add http stuffs on the service using it



//imports, elsewhere in app
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { NewAccountPageComponent } from './components/new-account-page/new-account-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MyGamesPageComponent } from './components/my-games-page/my-games-page.component';
import { GameDetailsPageComponent } from './components/game-details-page/game-details-page.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { NoteDetailsPageComponent } from './components/note-details-page/note-details-page.component';
import { NotesService } from './services/notes.service';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NotificationsComponent,
    LoginPageComponent,
    NewAccountPageComponent,
    HomePageComponent,
    MyGamesPageComponent,
    GameDetailsPageComponent,
    SearchPageComponent,
    NoteDetailsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    
  ],
  bootstrap: [
    AppComponent
  ]

})



export class AppModule { 

}


