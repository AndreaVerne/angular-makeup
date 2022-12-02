import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Makeup } from '../makeup-list/Makeup';

@Component({
  selector: 'app-input-int',
  templateUrl: './input-int.component.html',
  styleUrls: ['./input-int.component.scss']
})
export class InputIntComponent implements OnInit {
  @Input()
  cant: number = 0;
  @Input()
  max: number = 0;

  @Output()
  cantChange: EventEmitter<number> = new EventEmitter<number>();
  @Output()
  maxReached: EventEmitter<number> = new EventEmitter<number>();

  downCant(): void {
    if (this.cant > 0)
      this.cant--;
      this.cantChange.emit(this.cant);
  }

  upCant(): void {
    if (this.cant < this.max){
      this.cant++;
      this.cantChange.emit(this.cant);
    }
    else{
      this.maxReached.emit(this.max)
    }  
  }

  //ver como arreglar
  changeCant(event: KeyboardEvent) {
    this.cantChange.emit(this.cant);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
