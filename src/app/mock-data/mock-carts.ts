import { Cart } from '../bo/cart';
import { CartItem } from '../bo/cart-item';

/**
 * Define cartItem as input parameter for cart object.
 * Usage: CartItem(amount: number; description: string; price: number)
 */
let cartItems: CartItem[] = [
    new CartItem(3, "test1", 12.5),
    new CartItem(2, "test2", 25),
];

export let MockCart = new Cart(cartItems);
