import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './screens/home/home.component';
import { BattleComponent } from './screens/battle/battle.component';
import { CardComponent } from './components/card/card.component';
import { MiniCardComponent } from './components/mini-card/mini-card.component';
import { MessagesComponent } from './components/messages/messages.component';
import { DiceComponent } from './components/dice/dice.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BattleComponent,
    CardComponent,
    MiniCardComponent,
    MessagesComponent,
    DiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
