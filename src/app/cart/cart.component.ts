import { Component, OnInit } from '@angular/core';
import { MysticCartService } from '../mystic-cart.service';
import { Observable } from 'rxjs';
import { Makeup } from '../makeup-list/Makeup';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  lista!: Observable<Makeup[]>;
  
  constructor(private cart: MysticCartService) { }

  ngOnInit(): void {
  }

}
