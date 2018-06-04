import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  poke_pic1: any;
  poke_pic2: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

  ngOnInit() {
    this.poke_pic1 = {id_1: ""}
    this.poke_pic2 = {id_2: ""}
  }
  poke1(event){
    event.preventDefault();
    console.log(this.poke_pic1.id_1);
    this._router.navigate(['battle/' + this.poke_pic1.id_1 + '/' + this.poke_pic2.id_2]);
  	// let observable = this._httpService.get_pokemon(this.poke_pic);
  	// observable.subscribe(data => {
   //  console.log("MADE IT BACK")
  	// console.log(data.json());
  	// })
  }
  store_move(){
    let observable = this._httpService.move();
    observable.subscribe(data => {
      console.log('MADE IT BACK', data.json());
    })
  }

}
