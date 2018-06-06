import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  poke1: number;
  poke2: number;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

  ngOnInit() {

  }
  poke_pic(event){
    this.poke1 = Math.floor(Math.random()*255)+1
    this.poke2 = Math.floor(Math.random()*255)+1
    console.log(this.poke1);
    this._router.navigate(['battle/' + this.poke1 + '/' + this.poke2]);
  }

}
