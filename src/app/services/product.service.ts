import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Panel } from '../model/panel.model';
import { ParseError } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor(private http : HttpClient) { }
  
  public searchProducts(keyword:string="",page: number = 1, size:number = 4){
    return this.http.get(`http://localhost:8089/products?name_like=${keyword}&_page=${page}&_limit=${size}`,{observe:'response'})
  }
  
  public checkProduct(product: Panel):Observable<Panel>{
    return this.http.patch<Panel>(`http://localhost:8089/products/${product.id}`,{checked:!product.checked})
  }

  saveProduct(product: any):Observable<Panel> {
    return this.http.post<Panel>(`http://localhost:8089/products`,product)
  }

  public deleteProduct(product: Panel){
    return this.http.delete<any>(`http://localhost:8089/products/${product.id}`)
  }
  
  getProductById(productId: number) {
    return this.http.get<Panel>(`http://localhost:8089/products/${productId}`)
  }
  
  updateProduct(product: Panel) :Observable<Panel>{
    return this.http.put<Panel>(`http://localhost:8089/products/${product.id}`, product)
  }
}
