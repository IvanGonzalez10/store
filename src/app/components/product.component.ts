import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  addCar() {
    this.productClicked.emit(this.product.id);
  }
}
