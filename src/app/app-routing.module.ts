import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './screens/home/home.component'
import { BattleComponent } from './screens/battle/battle.component'


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'battle/:team', component: BattleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
