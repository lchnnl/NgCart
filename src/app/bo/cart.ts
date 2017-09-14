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
 * 
 */
minAmountForDiscount: number = 0;
/**
 * Discountperc = discountin % in the cart
 */
discountPerc: number = 0;
/**
 * DiscountValue = discount in amounts in the cart
 */
discountAmount: number = 0;
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
constructor(cartItems: CartItem[], minAmountForDiscount: number, discountPerc: number)
{
    this.minAmountForDiscount = minAmountForDiscount;
    this.setDiscountPerc(discountPerc);
    // Add all cartItems to item
    this.items = cartItems;
    for (let item of cartItems)
    {
        this.totalPrice += item.totalPrice;
    }
    this.calcTotalPrice();
}

/**
 * Sets the discounts and update totalPriceInclDiscont
 * @param discount in total values and not percentages
 */
setDiscountPerc(discountPerc: number)
{
    this.discountPerc = discountPerc;
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

updateItem(updatedItem: CartItem){
    for (let i in this.items){
        if (this.items[i].id === updatedItem.id) {
            // console.log (i + ":" + this.items[i].id);

            // // this.totalPrice -= this.items[i].totalPrice;
            // this.totalPrice += updatedItem.totalPrice;
            this.items[i] = updatedItem;
            // this.calcTotalPrice();
            break;
        }
    }
    console.log(updatedItem.id);
    // this.totalPrice = updatedItem.totalPrice;
    this.calcTotalPrice();
}
/**
 * Remove item based of item number 'itemNumber'
 * @param itemNumber index number of item in items array
 */
removeItemNumber(itemNumber: number) {
    this.items.splice(itemNumber,1);
}

getDiscountAmount() {
    return "€ " + this.discountAmount.toFixed(2);
}

getTotalPrice() {
    return "€ " + this.totalPrice.toFixed(2);
}

getTotalPriceInclDiscount() {
    return "€ " + this.totalPriceInclDiscount.toFixed(2);
}

/**
 * calculates the totalPriceInclDiscount field.
 */
private calcTotalPrice(): void {
    this.totalPrice = 0;
    for (let i of this.items) {
        this.totalPrice += i.totalPrice;
    }

    if (this.totalPrice >= this.minAmountForDiscount) {
        this.discountAmount = this.totalPrice * this.discountPerc / 100;
    }

    this.totalPriceInclDiscount = this.totalPrice + this.discountAmount;
}

}
