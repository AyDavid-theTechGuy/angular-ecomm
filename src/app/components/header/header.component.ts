import { Component, inject, signal } from '@angular/core';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent, RouterLink],
  template: `
    <div class="d-flex bg-secondary text-white-50 px-4 py-3">
      <span 
        class="my-auto fs-4"
        routerLink="/"
      >
        My Store
      </span>
      <app-primary-button 
        [label]="'Cart(' + cartService.cart().length + ')'" 
        class="ms-auto"
        routerLink="/cart"
      />
    </div>
  `,
  styles: ``,
})
export class HeaderComponent {

  cartService = inject(CartService);
}
