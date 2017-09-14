/**
 * Business object cart item.
 * A cart item can contain an amount. Description of Item, unit price and total price
 */

export class CartItem {
    /**
     * identifier of the item
     */
    id: number
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
    totalPrice: number;

    /**
     * Constructor
     * 
     * @param id            identifer
     * @param amount        amount of an item.
     * @param description   description of an item
     * @param price         unit price of an item
     */
    constructor(id: number, amount: number, description: string, price: number){
        this.id = id;
        this.amount = amount;
        this.description = description;
        this.price = price;
        this.calculateTotalPrice();
    }

    /**
     * Update the amount of the imtem. Automatically calculated the price
     * @param amount  number
     */
    updateAmount(amount: number) {
        this.amount = amount;
        this.calculateTotalPrice()
    }

    /**
     * return the price in currency
     */
    getPrice() {
        return "€ " + this.price;
    }

    /**
     * get total price in currency
     */
    getTotalPrice() {
        return "€ " + this.totalPrice;
    }

    /**
     * calcualtes the total price of an item.
     */
    private calculateTotalPrice(){
        this.totalPrice = this.amount * this.price;
    }

}
