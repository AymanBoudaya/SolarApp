import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Panel } from '../model/panel.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  public getProducts():Observable<Array<Panel>>{
    return this.http.get<Array<Panel>>("http://localhost:8089/products")
  }

  public checkProduct(product: Panel):Observable<Panel>{
    return this.http.patch<Panel>(`http://localhost:8089/products/${product.id}`,{checked:!product.checked})
  }

  public deleteProduct(product: Panel){
    return this.http.delete<any>(`http://localhost:8089/products/${product.id}`)
  }
}
