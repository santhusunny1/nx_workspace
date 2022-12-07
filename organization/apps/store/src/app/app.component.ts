import { Component } from '@angular/core';
import { exampleProducts } from '@organization/products';

@Component({
  selector: 'organization-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'store';
  products = exampleProducts;
}
