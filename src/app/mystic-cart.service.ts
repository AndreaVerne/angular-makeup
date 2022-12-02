import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Makeup } from './makeup-list/Makeup';

@Injectable({
  providedIn: 'root'
})
export class MysticCartService {

  constructor() { }

  private list: Makeup[] = [];
  //list: BehaviorSubject<Makeup[]> = new BehaviorSubject([this._list]);

  addToCart(makeup: Makeup) {
    let item = this.list.find((v1) => v1.name = makeup.name);
    //ver lo del tipo

    if(!item){
      this.list.push({...makeup});
    }
    else{
      item.quantity += makeup.quantity;
    }
    console.log(this.list);
    
  }
}
