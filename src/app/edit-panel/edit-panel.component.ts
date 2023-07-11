import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-panel',
  templateUrl: './edit-panel.component.html',
  styleUrls: ['./edit-panel.component.css']
})
export class EditPanelComponent implements OnInit {

  productId! : number;
  productFormGroup! : FormGroup;
  constructor(private activatedRoute : ActivatedRoute,
    private productService : ProductService,
    private fb: FormBuilder){

  }
  
  ngOnInit() {
    this.productId = this.activatedRoute.snapshot.params['id'];
    this.productService.getProductById(this.productId).subscribe({
      next : product => {
        this.productFormGroup = this.fb.group({
          id : this.fb.control(product.id),
          name : this.fb.control(product.name, Validators.required),
          price : this.fb.control(product.price),
          checked : this.fb.control(product.checked)
        })
      },
      error : (err) => console.log(err)
    })
  }

    updateProduct() {
      let product = this.productFormGroup.value;
      this.productService.updateProduct(product)
      .subscribe({
        next : data => alert(JSON.stringify(data)),
        error : (err) => console.log(err)
      })
    }
}
