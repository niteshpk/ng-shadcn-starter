import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  standalone: true,
  selector: 'ui-button',
  imports: [CommonModule],
  template: `
    <button
      [attr.type]="type"
      [ngClass]="[
        'rounded px-4 py-2 text-sm font-semibold transition',
        'bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200',
        class
      ]"
    >
      <ng-content></ng-content>
    </button>
  `,
})
export class ButtonComponent {
  @Input() type: 'button' | 'submit' = 'button';
  @Input() class = '';
}
