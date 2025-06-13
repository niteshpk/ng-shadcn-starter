import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'ui-card',
  imports: [CommonModule],
  template: `
    <div class="rounded-xl border bg-card text-card-foreground shadow p-4">
      <ng-content></ng-content>
    </div>
  `,
})
export class CardComponent {}
