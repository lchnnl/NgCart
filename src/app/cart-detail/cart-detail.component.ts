import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../bo/cart-item';

@Component({
  selector: '#app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {

  @Input() item: CartItem;
  @Output() onChangeTotalPrice = new EventEmitter<CartItem>();
  @Output() onDeleteItem = new EventEmitter<CartItem>();

  constructor() { }

  ngOnInit() {
  }

  /**
   * Update the total price and emit ChangeTotalPrice event
   * @param e  event
   */
  updateAmount($e) {
    this.item.updateAmount($e.target.value);
    this.onChangeTotalPrice.emit(this.item);
  }

  /**
   * remove cart item. Emit event and passes the item to be deleted
   */
  deleteItem() {
    this.onDeleteItem.emit(this.item);
  }
}
