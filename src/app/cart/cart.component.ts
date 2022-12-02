import { Component, OnInit } from '@angular/core';
import { MysticCartService } from '../mystic-cart.service';
import { observable, Observable } from 'rxjs';
import { Makeup } from '../makeup-list/Makeup';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  list: Makeup[] = [];
  
  constructor(private cart: MysticCartService) { 
    cart.list.subscribe(observable => this.list = observable);
    console.log(this.list);
  }

  ngOnInit(): void {
  }

}
