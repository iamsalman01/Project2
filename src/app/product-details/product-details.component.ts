import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailsService } from '../product/product-details.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

   productId : any;
   product : any;
  constructor(private activatedroute : ActivatedRoute , private service : ProductDetailsService ) { }

  ngOnInit(): void {
    this.productId= this.activatedroute.snapshot.paramMap.get('id');
    this.product=this.service.productlist.find(x=> x.id == this.productId)
  }

}
