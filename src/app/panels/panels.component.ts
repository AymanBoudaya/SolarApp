import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panels',
  templateUrl: './panels.component.html',
  styleUrls: ['./panels.component.css']
})
export class PanelsComponent implements OnInit {
  products: Array<any> = [];

  constructor(private http : HttpClient){

  }
  ngOnInit(){
    this.http.get<Array<any>>("http://localhost:8089/products")
    .subscribe({
      next : data => this.products = data,
      error : err => console.log(err)
    })
  }
  handleCheckProduct(product:any){
    this.http.patch<any>(`http://localhost:8089/products/${product.id}`,{checked:!product.checked})
    .subscribe({
      next : updatedProduct =>
        {
          product.checked = !product.checked

      },
      error : err => console.log(err)
    })
  };

}
