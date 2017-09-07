/**
 * Business object cart item.
 * A cart item can contain an amount. Description of Item, unit price and total price
 */

export class CartItemService {
/**
 * amount of a specific item
 */
amount: number;
/**
 * description of an item
 */
description: string;
/**
 * price is the unit price o the item
 */
price: number;
/**
 * total price
 */
totalPrice: number

/**
 * Constructor
 * 
 * @param amount        amount of an item.
 * @param description   description of an item
 * @param price         unit price of an item
 */
constructor(amount: number; description: string; price: number){
    this.amount = amount;
    this.description = description;
    this.price = price;
}

/**
 * calcualtes the total price of an item.
 */
private calculateTotalPrice(){
    this.totalPrice = this.amount * this.totalPrice;
}

}
