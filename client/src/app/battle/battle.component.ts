import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
  
declare var $: any;

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
  
  }

  home(){
    $("#dialog").dialog("destroy");
    $("#dialog2").dialog("destroy");
    this._router.navigate(['']);
  }
}
