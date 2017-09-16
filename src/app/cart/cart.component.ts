import { Component, OnInit } from '@angular/core';
import { MockCart } from '../mock-data/mock-carts';
import { Cart } from '../bo/cart';
import { CartItem } from '../bo/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  title: string;
  cart: Cart;

  constructor() {
    this.title = 'My Cart';
    this.cart = MockCart;
   }

  ngOnInit() {
  }

  /**
   * function to trigger the cart to recalculate the cart totals
   */
  calculatePrices() {
    this.cart.calcTotalPrice();
  }

  /**
   * delete item from the cart item list
   * @param cartItem CartItem
   */
  deleteItem(cartItem: CartItem){
    this.cart.deleteItem(cartItem);
  }

  /**
   * Add a new item to cart list
   * @param item  CartItem
   */
  addItem(item: CartItem){
    // create a new instance of the new item. Data binding for the new item is not desired
    let newItem: CartItem = new CartItem(item.amount,item.description,item.price);
    this.cart.addItem(newItem);
  }
}
