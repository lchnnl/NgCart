import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cart } from '../bo/cart';
import { CartItem } from '../bo/cart-item';

@Component({
  selector: 'app-cart-settings',
  templateUrl: './cart-settings.component.html',
  styleUrls: ['./cart-settings.component.css']
})
export class CartSettingsComponent implements OnInit {

  @Input() cart: Cart;
  @Output() onAddItem = new EventEmitter<CartItem>();
  item: CartItem = new CartItem(1, "123", 0);

  constructor() { }

  ngOnInit() {
  }

  /**
   * Set the discount threshold
   * @param e  event
   */
  setDiscountThreshold(e){
    this.cart.updateMinAmountForDiscount(e.target.value);
  }

  /**
   * set the discount percentage
   * @param e  event
   */
  setDiscountPerc(e) {
    this.cart.updateDiscountPerc(e.target.value)
  }

  /**
   * set amount of new item. calculate the total price
   * @param e  event
   */
  setItemAmount(e) {
    this.item.amount = e.target.value;
    this.item.calculateTotalPrice();
  }

  /**
   * set description of new item
   * @param e  event
   */
  setItemDescription(e) {
    this.item.description = e.target.value;
  }

  /**
   * set unit price of new item. calcualte the total price
   * @param e  event
   */
  setItemPrice(e) {
    this.item.price = e.target.value;
    this.item.calculateTotalPrice();
  }

  /**
   * add product is clicked. Emit onAddItem event and pass the new item
   */
  addItem(){
    this.onAddItem.emit(this.item);
  }
}
