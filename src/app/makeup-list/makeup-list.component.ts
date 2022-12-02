import { Component, OnInit } from '@angular/core';
import { Makeup } from './Makeup';

@Component({
  selector: 'app-makeup-list',
  templateUrl: './makeup-list.component.html',
  styleUrls: ['./makeup-list.component.scss']
})
export class MakeupListComponent implements OnInit {
makeups: Makeup []= [
  {
  name:'Labial Maybelline superStay tono 10',
  category:'Labios',
  price: 1100,
  stock: 6,
  image: 'assets/img/labial-10.jpg',
  offer: false,
  quantity: 0
  },
  {
    name:'Máscara de Pestañas Maybelline Sensational Sky High',
    category:'Ojos',
    price: 3970,
    stock: 0,
    image: 'assets/img/mascara-sky.jpg',
    offer: false,
    quantity: 0  
  },
    {
      name:'Base de maquillaje Maybelline Fit Me tono 128',
      category:'Rostro',
      price: 4000,
      stock: 5,
      image: 'assets/img/base-128.jpg',
      offer: true,
      quantity: 0
    }
]
  constructor() { }

  ngOnInit(): void {
  }

  downQuantity(makeup: Makeup) : void{
    if(makeup.quantity > 0)
    makeup.quantity--;
  }

  upQuantity(makeup: Makeup) : void{
    if(makeup.quantity < makeup.stock)
    makeup.quantity++;
  }

  //ver como arreglar
  changeQuantity(event: KeyboardEvent, makeup: Makeup) : void{
    if(!(event.key >= '0' && event.key <= '9')){

    }

  }
}
