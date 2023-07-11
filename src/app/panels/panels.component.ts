import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Panel } from '../model/panel.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panels',
  templateUrl: './panels.component.html',
  styleUrls: ['./panels.component.css']
})
export class PanelsComponent implements OnInit {

  public products!: Array<Panel>;
  public keyword: string = "";
  totalPages:number=0;
  pageSize:number=3;
  currentPage:number=1;
  constructor(private productService : ProductService,
    private router : Router){
    
  }
  ngOnInit(){
    this.searchProducts();
  }
  
  searchProducts() {
    
    this.productService.searchProducts(this.keyword,this.currentPage,this.pageSize)
    .subscribe({
      next : resp => {
        this.products = resp.body as Panel[]
        let totalProducts:number = parseInt(resp.headers.get('x-total-count')!)
        this.totalPages = Math.floor(totalProducts / this.pageSize);
        if(totalProducts % this.pageSize !=0) this.totalPages++;
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
  
  handleGotoPage(page: number) {
    this.currentPage = page;
    this.searchProducts();
  }

  handleEdit(product: Panel) {
    this.router.navigateByUrl(`/editProduct/${product.id}`) 
   }
}


