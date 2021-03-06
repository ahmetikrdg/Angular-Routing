import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { products } from '../products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products=products;
  constructor(private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.paramMap.subscribe(params=>{
    //   let id=+params.get('id');
    // });


    //query params
    this.route.queryParamMap.subscribe(params=>{
      console.log(params);
    })
  }

  loadProducts(){
    //herhangi bir işlem yapılınca products compa yönlendirelim
    this.router.navigate(['/products'],{queryParams:{
      page:1,
    }});
  }
}
