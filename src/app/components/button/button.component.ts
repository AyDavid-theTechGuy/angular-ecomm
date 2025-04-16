import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
    <button 
      class="btn btn-secondary px-3" 
      (click)="btnClicked.emit()"
    >
      {{ label() }}
    </button>
  `,
  styles: ``
})
export class ButtonComponent {
  label = input('');

  btnClicked = output();
}
