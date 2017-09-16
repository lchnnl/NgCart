export class CartItem {
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
     * @param amount        amount of an item.
     * @param description   description of an item
     * @param price         unit price of an item
     */
    constructor(amount: number, description: string, price: number){
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
    calculateTotalPrice(){
        this.totalPrice = this.amount * this.price;
    }

}
