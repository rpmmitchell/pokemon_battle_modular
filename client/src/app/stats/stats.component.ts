import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
	stats: object;
  constructor(
  	private _httpService: HttpService,
  	private _route: ActivatedRoute,
    private _router: Router ) { }

  ngOnInit() {
  	this.getStats();
  }

  getStats(){
  	let observable = this._httpService.stats();
  	observable.subscribe(data => {
  		this.stats = data.json().data;
  	})
  }

  remove_champs(){
    let observable = this._httpService.remove_champs();
    observable.subscribe();
    this.getStats();
  }
}
