import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';

import { Product } from '../../../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnChanges{
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();

  constructor(){

  }

  ngOnChanges(changes: SimpleChanges){
    console.log('OnChanges')
  }

  addCar() {
    this.productClicked.emit(this.product.id);
  }
}
