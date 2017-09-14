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
    this.title = 'Your order';
    this.cart = MockCart;
   }

  ngOnInit() {
  }

  calculatePrices(cartItem: CartItem) {
    this.cart.updateItem(cartItem);
    // this.cart.totalPrice = cartItem.totalPrice;
  }

}
