import { Component } from '@angular/core';
import { MockCart } from './mock-data/mock-carts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'afpp';
  // totalPrice = 12;
  totalPrice = MockCart.totalPrice;
}
