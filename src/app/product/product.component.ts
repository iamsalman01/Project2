import { Component, OnInit } from '@angular/core';
import { ProductDetailsService } from './product-details.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products =[

    {
      id : 1,
      name : 'Nokia 5.1 Plus',
      price : 8999,
    },
    {
      id : 2,
      name : 'Samsung A10s',
      price : 10999,
    },
    {
      id :3,
      name : 'Redmi Mi note 5 pro',
      price : 12999,
    },
    {
      id :4,
      name : 'Vivo Y2',
      price : 9500
    },

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
