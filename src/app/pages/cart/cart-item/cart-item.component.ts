import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/products.model';
import { ButtonComponent } from "../../../components/button/button.component";
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  imports: [ButtonComponent],
  template: `
    <div class="d-flex shadow-lg rounded p-4 mb-4">
      <img [src]="item().image" class="my-auto" />
      <div class="d-flex flex-column px-3">
        <span class="fs-5 fw-semibold">{{ item().title }}</span>
        <span>{{ '$' + item().price }}</span>
      </div>
      <div class="d-flex my-auto ms-auto">
        <app-button label="Remove" (btnClicked)="cartService.removeFromCart(item().id)" />
      </div>
    </div>
  `,
  styles: `
    img {
      height: 55px;
    }
  `
})
export class CartItemComponent {

  cartService = inject(CartService);

  item = input.required<Product>();
}
