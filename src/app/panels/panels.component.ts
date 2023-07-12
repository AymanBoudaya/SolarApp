import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Panel } from '../model/panel.model';
import { Router } from '@angular/router';
import { AppStateService } from '../services/app-state.service';

@Component({
  selector: 'app-panels',
  templateUrl: './panels.component.html',
  styleUrls: ['./panels.component.css']
})
export class PanelsComponent implements OnInit {


  constructor(private productService : ProductService,
    private router : Router, public appState : AppStateService){

  }

  ngOnInit(){
    this.searchProducts();
  }

  searchProducts() {
    // this.appState.setProductState({status:"LOADING"});
    this.productService.searchProducts(this.appState.productsState.keyword,this.appState.productsState.currentPage,this.appState.productsState.pageSize)
    .subscribe({
      next : resp => {
        let products = resp.body as Panel[]
        let totalProducts:number = parseInt(resp.headers.get('x-total-count')!)
        let totalPages = Math.floor(totalProducts / this.appState.productsState.pageSize);
        if(totalProducts % this.appState.productsState.pageSize !=0) totalPages++;
        this.appState.setProductState({
          products : products,
          totalProducts : totalProducts,
          totalPages : totalPages,
          status : "LOADED"
        })
      },
      error : err => {
        this.appState.setProductState({
          status : "ERROR",
          errorMessage : err.message
        })
      }
    })
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
        this.searchProducts()
      }
    })
  }

  handleGotoPage(page: number) {
    this.appState.productsState.currentPage = page;
    this.searchProducts();
  }

  handleEdit(product: Panel) {
    this.router.navigateByUrl(`/editProduct/${product.id}`)
   }
}


