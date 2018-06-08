import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { HealthService } from '../health.service'
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-player-1',
  templateUrl: './player-1.component.html',
  styleUrls: ['./player-1.component.css']
})
export class Player1Component implements OnInit {
	id: object;
  winner: object;
  display_name: String;
	poke1: any = [];
	rand_moves: any = [];
	rand_moves_url: any = [];
	render1: any;
  name: object;
	num: number;
  	health_1: number;
  	attack_1: number;
  	special_attack_1: number;
  	attack_poke_1: number;
  	player1_move_res: any = [];
  	player_1_moves = [];
  	player1_attack1: any;
  	player1_attack2: any;
  	player1_attack3: any;
  	player1_attack4: any;

  constructor(
  	private _httpService: HttpService,
  	private _healthService: HealthService,
  	private _route: ActivatedRoute,
    private _router: Router
  	) { }

  ngOnInit() {
  	this.render1 = false
  	this.poke1_grab()
  }

  poke1_grab(){
		event.preventDefault();
		this._route.params.subscribe((params: Params) => {
			let id_1 =  params['id1'];;
 	 	  	let observable = this._httpService.get_pokemon1(id_1);
  			observable.subscribe(data => {
  				this.poke1 = data.json();
  				for(let i = 0; i < 4; i++){
  					this.num = Math.floor(Math.random()*(this.poke1.data.moves.length));
  					this.rand_moves.push(this.num);
         		this.rand_moves_url.push(this.poke1.data.moves[this.num].move.url);
  				}
          this.winner = {poke_id: this.poke1.data.id, name: this.poke1.data.name };
          this.name = {name: this.poke1.data.name};
          this.display_name = this.poke1.data.name.toUpperCase();
          this.id = {id: this.poke1.data.id};
        	this._healthService.player_1_health = this.poke1.data.stats[5].base_stat * 3;
          this.attack_1 = this.poke1.data.stats[4].base_stat;
          this.special_attack_1 = this.poke1.data.stats[3].base_stat;
          this.poke1_move_stat();
  				this.render1 = true;

  			});	
		})
	}

  poke1_move_stat(){
    for(let i = 0; i < 4; i++){
      this.player1_move_res.push(this.rand_moves_url[i].split("/")[6]);
    }
    let observable1 = this._httpService.player1_get_move1(this.player1_move_res);
    observable1.subscribe(data => {
      this.player1_attack1 = data.json().data.power;
    })
    let observable2 = this._httpService.player1_get_move2(this.player1_move_res);
    observable2.subscribe(data => {
      this.player1_attack2 = data.json().data.power;
    })
    let observable3 = this._httpService.player1_get_move3(this.player1_move_res);
    observable3.subscribe(data => {
      this.player1_attack3 = data.json().data.power;
    })
    let observable4 = this._httpService.player1_get_move4(this.player1_move_res);
    observable4.subscribe(data => {
      this.player1_attack4 = data.json().data.power;
    })
  }




  player1_make_move1(){
    if(this.player1_attack1 == null){
      this._healthService.player_1_health += Math.floor(Math.random() * (this.special_attack_1));
    }
    else{
      this.attack_poke_1 = Math.floor(Math.random() * (this.player1_attack1 + this.attack_1));
      if(this._healthService.player_2_health > 0){
        this._healthService.player_2_health -= this.attack_poke_1; 
      }
      else{
        var observable = this._httpService.player_win(this.winner);
        observable.subscribe();
        alert(this.display_name + " WINS");
        this._router.navigate(['']);
      }
    }
  }

  player1_make_move2(){
    if(this.player1_attack2 == null){
      this._healthService.player_1_health += Math.floor(Math.random() * (this.special_attack_1));
    }
    else{
      this.attack_poke_1 = Math.floor(Math.random() * (this.player1_attack1 + this.attack_1));
      if(this._healthService.player_2_health > 0){
        this._healthService.player_2_health -= this.attack_poke_1; 
      }
      else{
        var observable = this._httpService.player_win(this.winner);
        observable.subscribe();
        alert(this.display_name + " WINS");
        this._router.navigate(['']);
      }
    }
  }
  player1_make_move3(){
    if(this.player1_attack3 == null){
      this._healthService.player_1_health += Math.floor(Math.random() * (this.special_attack_1));
    }
    else{
      this.attack_poke_1 = Math.floor(Math.random() * (this.player1_attack1 + this.attack_1));
      if(this._healthService.player_2_health > 0){
        this._healthService.player_2_health -= this.attack_poke_1; 
      }
      else{
        var observable = this._httpService.player_win(this.winner);
        observable.subscribe();
        alert(this.display_name + " WINS");
        this._router.navigate(['']);
      }
    }
  }
  player1_make_move4(){
    if(this.player1_attack1 == null){
      this._healthService.player_1_health += Math.floor(Math.random() * (this.special_attack_1));
    }
    else{
      this.attack_poke_1 = Math.floor(Math.random() * (this.player1_attack1 + this.attack_1));
      if(this._healthService.player_2_health > 0){
        this._healthService.player_2_health -= this.attack_poke_1; 
      }
      else{
        var observable = this._httpService.player_win(this.winner);
        observable.subscribe();
        alert(this.display_name + " WINS");
        this._router.navigate(['']);
      }
    }
  }
}
