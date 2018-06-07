import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HttpService {

  constructor(private _http: Http) { 

  }

  get_pokemon1(id){
  	console.log(id);
  	return this._http.get('/pokemon1/' + id );
  }
  get_pokemon2(id){
    console.log(id);
    return this._http.get('/pokemon2/' + id );
  }

  move(){
  	return this._http.get('/pokemon/grab/moves');
  }
  player1_get_move1(id){
    return this._http.get('/pokemon/grab/moves/' + id[0]);
  }
  player1_get_move2(id){
    return this._http.get('/pokemon/grab/moves/' + id[1]);
  }
  player1_get_move3(id){
    return this._http.get('/pokemon/grab/moves/' + id[2]);
  }
  player1_get_move4(id){
    return this._http.get('/pokemon/grab/moves/' + id[3]);
  }
  player2_get_move1(id_2){
    return this._http.get('/pokemon/grab/moves/' + id_2[0]);
  }
  player2_get_move2(id_2){
    return this._http.get('/pokemon/grab/moves/' + id_2[1]);
  }
  player2_get_move3(id_2){
    return this._http.get('/pokemon/grab/moves/' + id_2[2]);
  }
  player2_get_move4(id_2){
    return this._http.get('/pokemon/grab/moves/' + id_2[3]);
  }

  player_win(content){
    return this._http.post('/pokemon/player/win', content);
  }

  stats(){
    return this._http.get('/pokemon/stats');
  }

}
