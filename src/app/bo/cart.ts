import { CartItem } from './cart-item';

export class Cart {
/**
 * TotalPrice = total price of cart without discount
 */
totalPrice: number = 0;
/**
 * Minimum amount when discount has to be trigered.
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
    // initialize the cart
    this.minAmountForDiscount = minAmountForDiscount;
    this.discountPerc = discountPerc;
    this.items = cartItems;
    // recalculate the total amounts
    this.calcTotalPrice();
}

/**
 * sets the min amount for discount
 * @param amount  number
 */
updateMinAmountForDiscount(amount: number) {
    this.minAmountForDiscount = amount;
    this.calcTotalPrice();
}

/**
 * sets the discount percentages
 * @param discountPerc 
 */
updateDiscountPerc(discountPerc: number) {
    this.discountPerc = discountPerc;
    this.calcTotalPrice();
}
/**
 * Add a new item to the items array
 * @param item CartItem
 */
addItem(item: CartItem)
{
    this.items.push(item);
    this.calcTotalPrice();
}

/**
 * Delete an item from the cart
 * @param toDeleteItem Item to be deleted from the list
 */
deleteItem(toDeleteItem: CartItem){
    // Find and delete the item
    let i = this.items.indexOf(toDeleteItem);
    if (i >= 0){
        this.items.splice(i,1);
    }
    // recalculate the totals
    this.calcTotalPrice();
}

/**
 * returns discount amount
 */
getDiscountAmount() {
    return "€ " + this.discountAmount.toFixed(2);
}

/**
 * returns total price
 */
getTotalPrice() {
    return "€ " + this.totalPrice.toFixed(2);
}

/**
 * returns total prince including discount
 */
getTotalPriceInclDiscount() {
    return "€ " + this.totalPriceInclDiscount.toFixed(2);
}

/**
 * calculates the totalPriceInclDiscount field.
 */
calcTotalPrice(): void {
    // recalculate total price excl discount
    this.totalPrice = 0;
    for (let i of this.items) {
        this.totalPrice += i.totalPrice;
    }

    // recalculate discount amount
    if (this.totalPrice >= this.minAmountForDiscount) {
        this.discountAmount = this.totalPrice * this.discountPerc / 100;
    } else {
        this.discountAmount = 0;
    }

    // calculate total price including discount
    this.totalPriceInclDiscount = this.totalPrice - this.discountAmount;
}

}
