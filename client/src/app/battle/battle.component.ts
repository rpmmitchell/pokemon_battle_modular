import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {

  constructor(
  	private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  	) { }

  ngOnInit() {
  	// this.render1 = false
   //  this.render2 = false
  	// this.poke1_grab()
  }

}
