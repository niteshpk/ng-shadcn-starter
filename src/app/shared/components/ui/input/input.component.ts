import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'ui-input',
  imports: [CommonModule],
  template: `
    <input
      [type]="type"
      [placeholder]="placeholder"
      [ngClass]="[
        'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background',
        'placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        class
      ]"
    />
  `,
})
export class InputComponent {
  @Input() type = 'text';
  @Input() placeholder = '';
  @Input() class = '';
}
