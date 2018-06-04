import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {
	id: string;
	poke1: any = [];
  poke2: any = [];
	rand_moves: any = [];
  rand_moves2: any = [];
	rand_moves_url: any = [];
  rand_moves_url2: any = [];
	render1: any;
  render2: any;
	num: number;
  num2: number;
  health_1: number;
  attack_1: number;
  special_attack_1: number;
  special_attack_2: number;
  health_2: number;
  attack_2: number;
  attack_poke_1: number;
  attack_poke_2: number;
  test_split: any;
  player1_move_res: any = [];
  player2_move_res: any = [];
  player_1_moves = [];
  player1_attack1: any;
  player1_attack2: any;
  player1_attack3: any;
  player1_attack4: any;
  player_2_moves = [];
  player2_attack1: any;
  player2_attack2: any;
  player2_attack3: any;
  player2_attack4: any;
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

	// poke1_grab(){
	// 	event.preventDefault();
	// 	this._route.params.subscribe((params: Params) => {
	// 		let id_1 = params['id1'];
 // 	 	  let observable = this._httpService.get_pokemon1(id_1);
 //  		observable.subscribe(data => {
 //  			this.poke1 = data.json();
 //  			for(let i = 0; i < 4; i++){
 //  				this.num = Math.floor(Math.random()*(this.poke1.data.moves.length))
 //  				this.rand_moves.push(this.num);
 //          this.rand_moves_url.push(this.poke1.data.moves[this.num].move.url)
 //  			}
 //  			console.log("PLAYRER1", this.poke1.data);
 //        this.health_1 = this.poke1.data.stats[5].base_stat * 3
 //        this.attack_1 = this.poke1.data.stats[4].base_stat
 //        this.special_attack_1 = this.poke1.data.stats[3].base_stat
 //        this.poke1_move_stat();
 //  			this.render1 = true;
 //        this.poke2_grab();
 //  		});	
	// 	})
	// }


  // poke1_move_stat(){
  //   for(let i = 0; i < 4; i++){
  //     this.player1_move_res.push(this.rand_moves_url[i].split("/")[6]);
  //   }
  //   let observable1 = this._httpService.player1_get_move1(this.player1_move_res);
  //   observable1.subscribe(data => {
  //     console.log(data.json());
  //     this.player1_attack1 = data.json().data.power
  //     console.log("POWER OF THE FIRST ATTACK", this.player1_attack1)
  //   })
  //   let observable2 = this._httpService.player1_get_move2(this.player1_move_res);
  //   observable2.subscribe(data => {
  //     console.log(data.json());
  //     this.player1_attack2 = data.json().data.power
  //   })
  //   let observable3 = this._httpService.player1_get_move3(this.player1_move_res);
  //   observable3.subscribe(data => {
  //     console.log(data.json());
  //     this.player1_attack3 = data.json().data.power
  //   })
  //   let observable4 = this._httpService.player1_get_move4(this.player1_move_res);
  //   observable4.subscribe(data => {
  //     console.log(data.json());
  //     this.player1_attack4 = data.json().data.power
  //   })
  // }



  // player1_make_move1(){
  //   if(this.player1_attack1 == null){
  //     this.health_1 += Math.floor(Math.random() * (this.special_attack_1));
  //   }
  //   else{
  //     this.attack_poke_1 = Math.floor(Math.random() * (this.player1_attack1 + this.attack_1));
  //     console.log(this.attack_poke_1);
  //     if(this.health_2 > 0){
  //       this.health_2 -= this.attack_poke_1; 
  //     }
  //     else{
  //       alert('Game Over');
  //     }
  //   }
  // }
  // player1_make_move2(){
  //   if(this.player1_attack2 == null){
  //     this.health_1 += Math.floor(Math.random() * (this.special_attack_1));
  //   }
  //   else{
  //     this.attack_poke_1 = Math.floor(Math.random() * (this.player1_attack2 + this.attack_1));
  //     console.log(this.attack_poke_1);
  //     if(this.health_2 > 0){
  //       this.health_2 -= this.attack_poke_1; 
  //     }
  //     else{
  //       alert('Game Over');
  //     }
  //   }
  // }
  // player1_make_move3(){
  //   if(this.player1_attack3 == null){
  //     this.health_1 += Math.floor(Math.random() * (this.special_attack_1));
  //   }
  //   else{
  //     this.attack_poke_1 = Math.floor(Math.random() * (this.player1_attack3 + this.attack_1));
  //     console.log(this.attack_poke_1);
  //     if(this.health_2 > 0){
  //       this.health_2 -= this.attack_poke_1; 
//   //     }
//   //     else{
//   //       alert('Game Over');
//   //     }
//   //   }
//   // }
//   // player1_make_move4(){
//   //   if(this.player1_attack1 == null){
//   //     this.health_1 += Math.floor(Math.random() * (this.special_attack_1));
//   //   }
//   //   else{
//   //     this.attack_poke_1 = Math.floor(Math.random() * (this.player1_attack4 + this.attack_1));
//   //     console.log(this.attack_poke_1);
//   //     if(this.health_2 > 0){
//   //       this.health_2 -= this.attack_poke_1; 
//   //     }
//   //     else{
//   //       alert('Game Over');
//   //     }
//   //   }
//   // }


//   poke2_grab(){
//     event.preventDefault();
//     this._route.params.subscribe((params: Params) => {
//       let id_2 = params['id2'];
//       let observable = this._httpService.get_pokemon2(id_2);
//       observable.subscribe(data => {
//         this.poke2 = data.json();
//         for(let i = 0; i < 4; i++){
//           this.num2 = Math.floor(Math.random()*(this.poke2.data.moves.length))
//           this.rand_moves2.push(this.num2);
//           this.rand_moves_url2.push(this.poke2.data.moves[this.num2].move.url)
//         }
//         console.log("IN POKE GRAB WITH URL", this.rand_moves_url2)
//         console.log("IN POKE GRAB", this.rand_moves2)
//         this.health_2 = this.poke2.data.stats[5].base_stat * 3
//         this.attack_2 = this.poke2.data.stats[4].base_stat
//         this.special_attack_2 = this.poke2.data.stats[3].base_stat
//         this.poke2_move_stat();
//         this.render2 = true;
//       }); 
//     })
//   }


//   poke2_move_stat(){
//     for(let i = 0; i < 4; i++){
//       this.player2_move_res.push(this.rand_moves_url2[i].split("/")[6]);
//     }
//     console.log("POKE2 MOVE STATS", this.player2_move_res);

//     let observable1 = this._httpService.player2_get_move1(this.player2_move_res);
//     observable1.subscribe(data => {
//       console.log(data.json());
//       this.player2_attack1 = data.json().data.power
//       console.log("POWER FOR PLAYER 2", this.player2_attack1);
//     })
//     let observable2 = this._httpService.player2_get_move2(this.player2_move_res);
//     observable2.subscribe(data => {
//       console.log(data.json());
//       this.player2_attack2 = data.json().data.power
//       console.log("POWER FOR PLAYER 2", this.player2_attack2);
//     })
//     let observable3 = this._httpService.player2_get_move3(this.player2_move_res);
//     observable3.subscribe(data => {
//       console.log(data.json());
//       this.player2_attack3 = data.json().data.power
//       console.log("POWER FOR PLAYER 2", this.player2_attack3);
//     })
//     let observable4 = this._httpService.player2_get_move4(this.player2_move_res);
//     observable4.subscribe(data => {
//       console.log(data.json());
//       this.player2_attack4 = data.json().data.power
//       console.log("POWER FOR PLAYER 2", this.player2_attack4);
//     })
//   }


//   player2_make_move1(){
//     if(this.player2_attack1 == null){
//       this.health_2 += Math.floor(Math.random() * (this.special_attack_2));
//       // console.log("THIS HEALS");
//     }
//     else{
//       this.attack_poke_2 = Math.floor(Math.random() * (this.player2_attack1 + this.attack_2));
//       console.log(this.attack_poke_2);
//       if(this.health_1 > 0){
//         this.health_1 -= this.attack_poke_2; 
//       }
//       else{
//         alert('Game Over');
//       }
//     }
//   }
//   player2_make_move2(){
//     if(this.player2_attack2 == null){
//       this.health_2 += Math.floor(Math.random() * (this.special_attack_2));
//       // console.log("THIS HEALS");
//     }
//     else{
//       this.attack_poke_2 = Math.floor(Math.random() * (this.player2_attack2 + this.attack_2));
//       console.log(this.attack_poke_2);
//       if(this.health_1 > 0){
//         this.health_1 -= this.attack_poke_2; 
//       }
//       else{
//         alert('Game Over');
//       }
//     }
//   }
//   player2_make_move3(){
//     if(this.player2_attack3 == null){
//       this.health_2 += Math.floor(Math.random() * (this.special_attack_2));
//       // console.log("THIS HEALS");
//     }
//     else{
//       this.attack_poke_2 = Math.floor(Math.random() * (this.player2_attack3 + this.attack_2));
//       console.log(this.attack_poke_2);
//       if(this.health_1 > 0){
//         this.health_1 -= this.attack_poke_2; 
//       }
//       else{
//         alert('Game Over');
//       }
//     }
//   }
//   player2_make_move4(){
//     if(this.player2_attack4 == null){
//       this.health_2 += Math.floor(Math.random() * (this.special_attack_2));
//       // console.log("THIS HEALS");
//     }
//     else{
//       this.attack_poke_2 = Math.floor(Math.random() * (this.player2_attack4 + this.attack_2));
//       console.log(this.attack_poke_2);
//       if(this.health_1 > 0){
//         this.health_1 -= this.attack_poke_2; 
//       }
//       else{
//         alert('Game Over');
//       }
//     }
//   }
// }
