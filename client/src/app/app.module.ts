import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameFormComponent } from './components/game-form/game-form.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { NavigationComponent } from './components/navigation/navigation.component';

// Servicios
import { GamesService } from './services/games.service';



@NgModule({
  declarations: [
    AppComponent,
    GameFormComponent,
    GameListComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    GamesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }