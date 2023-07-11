import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Panel } from '../model/panel.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-panels',
  templateUrl: './panels.component.html',
  styleUrls: ['./panels.component.css']
})
export class PanelsComponent implements OnInit {
  products!: Array<Panel>;

  constructor(private productService : ProductService){

  }
  ngOnInit(){
    this.getProducts();
  }

  getProducts() {

    this.productService.getProducts()
    .subscribe({
      next : data => {
        this.products = data
      },
      error : err => console.log(err)
    })
    //this.products = this.productService.getProducts()
  }

  handleCheckProduct(product:Panel){
    this.productService.checkProduct(product)
    .subscribe({
      next : updatedProduct =>
        {
          product.checked = !product.checked

      },
      error : err => console.log(err)
    })
  };


  handleDelete(product:Panel) {
    if(confirm("Etes vous sûr de vouloir supprimer ?"))
    this.productService.deleteProduct(product)
    .subscribe({
      next: value => {
        this.products = this.products.filter(p => p.id != product.id)
      }
    })
  }
}


