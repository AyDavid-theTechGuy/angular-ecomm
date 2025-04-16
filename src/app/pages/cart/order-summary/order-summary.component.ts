import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";

@Component({
  selector: 'app-order-summary',
  imports: [PrimaryButtonComponent],
  template: `
    <div class="shadow-lg rounded p-4">
      <h2>Order Summary</h2>
      <div class="d-flex flex-column">
        <div class="d-flex fs-5">
          <span class="pe-3">Total</span>
          <span class="fw-semibold">{{ '$' + total() }}</span>
        </div>
        <app-primary-button label="Proceed to checkout" class="d-grid mt-2" />
      </div>
    </div>
  `,
  styles: ``
})
export class OrderSummaryComponent {
  cartService = inject(CartService);

  total = computed(() => {
    let total = 0;
    for(const item of this.cartService.cart()) {
      total += item.price;
    }

    return total;
  })
}
