import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './screens/home/home.component'
import { BattleComponent } from './screens/battle/battle.component'
import { BattleCardsComponent } from './screens/battle-cards/battle-cards.component'


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'battle/:team', component: BattleComponent },
  { path: 'battle-cards/:team', component: BattleCardsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
