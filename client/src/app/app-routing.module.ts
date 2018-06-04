import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BattleComponent } from './battle/battle.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'battle/:id1/:id2', component: BattleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
