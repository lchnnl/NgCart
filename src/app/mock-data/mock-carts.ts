import { Cart } from '../bo/cart';
import { CartItem } from '../bo/cart-item';

/**
 * Define cartItem as input parameter for cart object.
 * Usage: CartItem(amount: number; description: string; price: number)
 */
let cartItems: CartItem[] = [
    new CartItem(1, 3, "Pinda's", 12.5),
    new CartItem(2, 2, "Kaas", 25),
    new CartItem(3, 2, "Pindakaas", 6.32)
];

export let MockCart = new Cart(cartItems, 100, 10.5);
