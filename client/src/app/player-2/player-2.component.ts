import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { HealthService } from '../health.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-player-2',
  templateUrl: './player-2.component.html',
  styleUrls: ['./player-2.component.css']
})
export class Player2Component implements OnInit {
	id: string;
  	poke2: any = [];
  	rand_moves2: any = [];
  	rand_moves_url2: any = [];
  	render2: any;
  	num2: number;
  	health_2: number;
 	attack_2: number;
 	special_attack_2: number;
  	attack_poke_2: number;
  	player2_move_res: any = [];
  	player_2_moves = [];
  	player2_attack1: any;
  	player2_attack2: any;
  	player2_attack3: any;
  	player2_attack4: any;
  constructor(
  	private _httpService: HttpService,
    private _healthService: HealthService,
  	private _route: ActivatedRoute,
    private _router: Router
  	) { }

  ngOnInit() {
  	this.render2 = false
  	this.poke2_grab()
  }

  poke2_grab(){
    event.preventDefault();
    this._route.params.subscribe((params: Params) => {
      let id_2 = params['id2'];
      let observable = this._httpService.get_pokemon2(id_2);
      observable.subscribe(data => {
        this.poke2 = data.json();
        for(let i = 0; i < 4; i++){
          this.num2 = Math.floor(Math.random()*(this.poke2.data.moves.length))
          this.rand_moves2.push(this.num2);
          this.rand_moves_url2.push(this.poke2.data.moves[this.num2].move.url)
        }

        this._healthService.player_2_health = this.poke2.data.stats[5].base_stat * 3
        this.attack_2 = this.poke2.data.stats[4].base_stat
        this.special_attack_2 = this.poke2.data.stats[3].base_stat
        this.poke2_move_stat();
        this.render2 = true;
      }); 
    })
  }



  poke2_move_stat(){
    for(let i = 0; i < 4; i++){
      this.player2_move_res.push(this.rand_moves_url2[i].split("/")[6]);
    }
    console.log("POKE2 MOVE STATS", this.player2_move_res);

    let observable1 = this._httpService.player2_get_move1(this.player2_move_res);
    observable1.subscribe(data => {
      console.log(data.json());
      this.player2_attack1 = data.json().data.power
      console.log("POWER FOR PLAYER 2", this.player2_attack1);
    })
    let observable2 = this._httpService.player2_get_move2(this.player2_move_res);
    observable2.subscribe(data => {
      console.log(data.json());
      this.player2_attack2 = data.json().data.power
      console.log("POWER FOR PLAYER 2", this.player2_attack2);
    })
    let observable3 = this._httpService.player2_get_move3(this.player2_move_res);
    observable3.subscribe(data => {
      console.log(data.json());
      this.player2_attack3 = data.json().data.power
      console.log("POWER FOR PLAYER 2", this.player2_attack3);
    })
    let observable4 = this._httpService.player2_get_move4(this.player2_move_res);
    observable4.subscribe(data => {
      console.log(data.json());
      this.player2_attack4 = data.json().data.power
      console.log("POWER FOR PLAYER 2", this.player2_attack4);
    })
  }


  player2_make_move1(){
    if(this.player2_attack1 == null){
      this._healthService.player_2_health+= Math.floor(Math.random() * (this.special_attack_2));
    }
    else{
      this.attack_poke_2 = Math.floor(Math.random() * (this.player2_attack1 + this.attack_2));
      this._healthService.player_1_health -= this.attack_poke_2
      console.log("I ATTACKED PLAYER ONE FUCK YES", this._healthService.player_1_health) 
    }
  }
  player2_make_move2(){
    if(this.player2_attack2 == null){
      this._healthService.player_2_health += Math.floor(Math.random() * (this.special_attack_2));
      // console.log("THIS HEALS");
    }
    else{
      this.attack_poke_2 = Math.floor(Math.random() * (this.player2_attack2 + this.attack_2));
      this._healthService.player_1_health -= this.attack_poke_2
      console.log("I ATTACKED PLAYER ONE FUCK YES", this._healthService.player_1_health) 
    }
  }
  player2_make_move3(){
    if(this.player2_attack3 == null){
      this._healthService.player_2_health += Math.floor(Math.random() * (this.special_attack_2));
      // console.log("THIS HEALS");
    }
    else{
      this.attack_poke_2 = Math.floor(Math.random() * (this.player2_attack3 + this.attack_2));
      this._healthService.player_1_health -= this.attack_poke_2
      console.log("I ATTACKED PLAYER ONE FUCK YES", this._healthService.player_1_health) 
    }
  }
  player2_make_move4(){
    if(this.player2_attack4 == null){
      this._healthService.player_2_health += Math.floor(Math.random() * (this.special_attack_2));
      // console.log("THIS HEALS");
    }
    else{
      this.attack_poke_2 = Math.floor(Math.random() * (this.player2_attack4 + this.attack_2));
      this._healthService.player_1_health -= this.attack_poke_2
      console.log("I ATTACKED PLAYER ONE FUCK YES", this._healthService.player_1_health) 
    }
  }
}
