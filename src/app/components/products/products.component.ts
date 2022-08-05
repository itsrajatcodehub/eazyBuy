import { Component, OnInit } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public productList:any;
  public getProducts : any;
  constructor(private api: ApiService, private cartService: CartService) { }


  ngOnInit(): void {
    this.api.getProducts()
    .subscribe(res=>{
      this.getProducts = res;

      this.productList.forEach((a:any)=>{
        Object.assign(a,{quantity:1, total:a.price});
      })
    })
  }

  addtocart(item : any){
    this.cartService.addtoCart(item);
  }

}
