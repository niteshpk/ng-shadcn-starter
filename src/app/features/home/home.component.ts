import { Component } from '@angular/core';
import { CardComponent } from '@shared/components/ui/card/card.component';
import { InputComponent } from '@shared/components/ui/input/input.component';
import { ButtonComponent } from '@shared/components/ui/button/button.component'; // <-- Update this path as needed

@Component({
  standalone: true,
  selector: 'app-home',
  template: `
    <ui-card>
      <h2 class="text-xl font-bold mb-4">Sign In</h2>
      <ui-input placeholder="Email address" class="mb-3"></ui-input>
      <ui-input type="password" placeholder="Password" class="mb-3"></ui-input>
        <ui-button label="Click Me"></ui-button>
    </ui-card>
  `,
  imports: [CardComponent, InputComponent, ButtonComponent],
})
export class HomeComponent {}
