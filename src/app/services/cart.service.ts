/**
 * Cart service
 * 
 */
import { Injectable } from '@angular/core';

import { CartItemService } from 'cart-item';

@Injectable()
export class CartService {
/**
 * TotalPrice = total price of cart without discount
 */
totalPrice: number = 0;
/**
 * Discount = discount in the cart
 */
discount: number = 0;
/**
 * totalPriceInclDiscount = TotalPrice + Discount
 */
totalPriceInclDiscount: number = 0;
/**
 * cartitems contains the items within the cart
 */
items: CartItem[];

/**
 * Constructor: initializes the shopping cart
 * @param totalPrice Initialize cart with the total price
 */
constructor(totalPrice: number = 0, discount: number = 0){
    this.totalPrice = totalPrice;
    this.discount = discount;
    this.updateTotalPriceInclDiscount();
}

/**
 *  Sets the total pice and updates totalPriceInclDiscount
 * @param totalPrice the total price
 */
setTotalPrice(totalPrice: number){
    this.totalPrice = totalPrice;
    this.updateTotalPriceInclDiscount();
}

/**
 * Sets the discounts and update totalPriceInclDiscont
 * @param discount in total values and not percentages
 */
setDiscount(discount:number){
    this.discount = discount;
    this.updateTotalPriceInclDiscount();
}

/**
 * Add a new item to the items array
 * @param item CartItem
 */
addItem(item: CartItem){
    this.items.pop(item);
}

/**
 * Remove item based of item number 'itemNumber'
 * @param itemNumber index number of item in items array
 */
removeItemNumber(itemNumber: number){
    this.items.splice(itemNumber,1);
}

/**
 * calculates the totalPriceInclDiscount field.
 */
private updateTotalPriceInclDiscount(){
    this.totalPriceInclDiscount = this.totalPrice + this.discount;
}

}
