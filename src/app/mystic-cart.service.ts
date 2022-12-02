import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Makeup } from './makeup-list/Makeup';

@Injectable({
  providedIn: 'root'
})
export class MysticCartService {

  constructor() { }

  private _list: Makeup[] = [];
  list: BehaviorSubject<Makeup[]> = new BehaviorSubject(this._list);

  addToCart(makeup: Makeup) {
    let item = this._list.find((v1) => v1.name == makeup.name);

    if(!item){
      this._list.push({...makeup});
    }
    else{
      item.quantity += makeup.quantity;
    }

    this.list.next(this._list);
  }
}
