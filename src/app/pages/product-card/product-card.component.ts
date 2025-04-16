import { Component, inject, input } from '@angular/core';
import { Product } from '../../models/products.model';
import { PrimaryButtonComponent } from "../../components/primary-button/primary-button.component";
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent],
  template: `
    <div class="shadow-lg h-100 rounded p-4" style="position: relative;">
        <img [src]="product().image" class="d-block mx-auto pt-2">
        <div class="d-flex flex-column">
          <span class="fs-5 fw-semibold">{{ product().title }}</span>
          <span class="">{{ '$' + product().price }}</span>
          <app-primary-button label="Add to Cart" class="d-grid mt-3" (btnClicked)="cartService.addToCart(product())" />
        </div>
        <span 
          class="stock fw-semibold"
          [class]="product().stock ? 'text-success' : 'text-danger'"
        >
          @if (product().stock) {
            {{ product().stock }} left
          } @else {
            Out of stock
          }
        </span>
    </div>
  `,
  styles: `
    img {
      height: 100px;
      width: auto;
    }

    span.stock {
      position: absolute;
      top: 8px;
      right: 12px
    }
  `
})
export class ProductCardComponent {
  cartService = inject(CartService);
  product = input.required<Product>();
}
