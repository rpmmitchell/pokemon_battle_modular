import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BattleComponent } from './battle/battle.component';
import { HttpService } from './http.service';
import { HealthService } from './health.service';
import { Player1Component } from './player-1/player-1.component';
import { Player2Component } from './player-2/player-2.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BattleComponent,
    Player1Component,
    Player2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [HttpService, HealthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
