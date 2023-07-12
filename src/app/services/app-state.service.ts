import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  public productsState : any = {
    products:[],
    keyword:"",
    totalPages:0,
    pageSize:3,
    currentPage:1,
    totalProducts:0,
    status : "",
    errorMessage : ""
  }
  constructor() { }

  public setProductState(state:any):void {
    this.productsState={...this.productsState,...state}
  }
}
