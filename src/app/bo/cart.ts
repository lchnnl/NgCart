/**
 * Cart service
 * 
 */

/**
 * Classes
 */
import { CartItem } from './cart-item';

export class Cart {
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
 * @param items Initialize cart by adding the items to the art
 */
constructor(cartItems: CartItem[])
{
    // Add all cartItems to item
    this.items = cartItems;
    for (let item of cartItems)
    {
        this.totalPrice += item.totalPrice;
    }
}

/**
 * Sets the discounts and update totalPriceInclDiscont
 * @param discount in total values and not percentages
 */
setDiscount(discount: number)
{
    this.discount = discount;
    this.updateTotalPriceInclDiscount();
}

/**
 * Add a new item to the items array
 * @param item CartItem
 */
addItem(item: CartItem)
{
    this.items.push(item);
    this.totalPrice += item.totalPrice;
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
