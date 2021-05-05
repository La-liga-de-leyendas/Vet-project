import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { VetServicesService } from 'src/app/shared/services/vetservices.service';

@Component({
  selector: 'app-my-vet-services',
  templateUrl: './my-vet-services.component.html',
  styleUrls: ['./my-vet-services.component.scss']
})
export class MyVetServicesComponent implements OnInit {

  products = [];
  productForm: FormGroup;

  productSubs: Subscription;
  productGetSubs: Subscription;
  productDeleteSubs: Subscription;
  productUpdateSubs: Subscription;
  idEdit: any;

  constructor(private formBuilder: FormBuilder, private productService: VetServicesService, private authService: AuthService) { }

  ngOnInit(): void {
    this.loadProducts();

    this.productForm = this.formBuilder.group({
      description: ['', [ Validators.required, Validators.minLength(3)]],
      imageUrl: '',
      stock: '',
      storeId: '',
      hour: '',
      title: ''
    });
  }

  onEnviar2(): void {
    console.log('FORM GROUP: ', this.productForm.value);

    this.productSubs = this.productService.addServices({
        ...this.productForm.value,
        storeId: this.authService.getUserId()
      }
    ).subscribe(res => {
      console.log('RSPUESTA: ', res);
      this.loadProducts();
    },
      err => {
        console.log('ERROR DE SERVIDOR');
      }
    );
  }

  onUpdateProduct(): void {
    this.productUpdateSubs = this.productService.updateServices(
      this.idEdit,
        {
          ...this.productForm.value,
          storeId: this.authService.getUserId()
        }
      ).subscribe(
      res => {
        console.log(res);
        this.loadProducts();
      },
      err => {
        console.log('ERROR DE SERVIDOR');
      }
    );
  }

  loadProducts(): void {
    this.products = [];
    const userId = this.authService.getUserId();
    this.productGetSubs = this.productService.getVetServicesById(userId).subscribe( res => {
      // console.log('RESPUESTA: ', Object.entries(res));
      Object.entries(res).map((p: any) => this.products.push({id: p[0],  ...p[1]}));
    });

  }

  onDelete(id: any): void {
    this.productDeleteSubs = this.productService.deleteServices(id).subscribe(
      res => {
        console.log(res);
        this.loadProducts();
      },
      err => {
        console.log('ERROR DE SERVIDOR');
      }
    );
  }

  onEdit(product): void {
    this.idEdit = product.id;
    this.productForm.patchValue(product);
  }

  refresh(): void {
    window.location.reload();
  }

  ngOnDestroy(): void {
    this.productSubs ? this.productSubs.unsubscribe() : '';
    this.productGetSubs ? this.productGetSubs.unsubscribe() : '';
    this.productDeleteSubs ? this.productDeleteSubs.unsubscribe() : '';
    this.productUpdateSubs ? this.productUpdateSubs.unsubscribe() : '';
  }

}
