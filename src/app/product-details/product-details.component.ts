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
    this.activatedroute.paramMap.subscribe((param)=>{
      this.productId= param.get('id');      
      this.product=this.service.productlist.find(x=> x.id == this.productId)
    });
  
  }

}
