import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { MakeupDataService } from '../makeup-data.service';
import { MysticCartService } from '../mystic-cart.service';
import { Makeup } from './Makeup';

@Component({
  selector: 'app-makeup-list',
  templateUrl: './makeup-list.component.html',
  styleUrls: ['./makeup-list.component.scss']
})
export class MakeupListComponent implements OnInit {

  //Datos
makeups: Makeup []= [];

  constructor(
    private cart: MysticCartService,
   private makeupDataService: MakeupDataService ) {}

  ngOnInit(): void {
    this.makeupDataService.getAll().subscribe(makeups => this.makeups = makeups);
  }

  maxReached(evemto: number){
   console.log("Se alcanzo el maximo de stock");
  }


  addToCart(makeup: Makeup){
    if(makeup.quantity != 0)
    this.cart.addToCart(makeup); 
    makeup.stock -= makeup.quantity;
      
    
  makeup.quantity = 0;
  }
}
