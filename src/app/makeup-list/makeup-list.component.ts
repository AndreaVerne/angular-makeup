import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-makeup-list',
  templateUrl: './makeup-list.component.html',
  styleUrls: ['./makeup-list.component.scss']
})
export class MakeupListComponent implements OnInit {
makeup = {
  "name":"Labial Maybelline superStay tono 10 ",
  "category":"Labios",
  "price": 1100,
  "stock": 6,
  "image": "assets/img/labial-10.jpg"
}
  constructor() { }

  ngOnInit(): void {
  }

}
