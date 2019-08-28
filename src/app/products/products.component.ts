import { Component, OnInit } from '@angular/core';

export interface Product {
  name: string;
  price: number;
  description: string;
  active: boolean;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [
    {
      name: 'IPhone 6',
      price: 400,
      description: 'IPhone 6 from Apple',
      active: false
    },
    {
      name: 'Samsung Galaxy Y',
      price: 200,
      description: 'Phone from Samsung',
      active: true
    },
    {
      name: 'IPhone XS',
      price: 800,
      description: 'IPhone XS from Apple',
      active: false
    }
  ];
  name = '';
  price = 0;
  description = '';
  filterValue = 'all';

  constructor() { }

  ngOnInit() {
  }

  addProduct() {
    const isExists = this.products.some(product => product.name === this.name);
    if (isExists) {
      alert('da ton tai');
    } else {
      const newProduct: Product = {
        name: this.name,
        price: this.price,
        description: this.description,
        active: false
      };

      this.products.push(newProduct);
    }
  }

  removeProduct(name: string) {
    this.products = this.products.filter(product => product.name !== name);
  }

  changeStatus(product: Product) {
    product.active = !product.active;
  }

}
