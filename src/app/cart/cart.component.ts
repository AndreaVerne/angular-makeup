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

  list$: Observable<Makeup[]>;
  
  constructor(private cart: MysticCartService) { 
    this.list$ = cart.list.asObservable();
  }

  ngOnInit(): void {
  }

}
