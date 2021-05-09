import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ProductsService } from 'src/app/shared/services/products.service';
import { ProvidersService } from 'src/app/shared/services/providers.service';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.scss']
})
export class MyProductsComponent implements OnInit {

  products = [];
  productForm: FormGroup;

  productSubs: Subscription;
  productGetSubs: Subscription;
  productDeleteSubs: Subscription;
  productUpdateSubs: Subscription;
  idEdit: any;
  onlyName: any;

  produccts = [];
  proGetSubs: Subscription;

  constructor(private formBuilder: FormBuilder, private productService: ProductsService, private authService: AuthService, private providerService: ProvidersService) { }

  ngOnInit(): void {
    this.loadProducts();
    this.loadName();

    this.productForm = this.formBuilder.group({
      description: ['', [ Validators.required, Validators.minLength(3)]],
      imageUrl: '',
      stock: '',
      storeId: '',
      price: '',
      title: ''
    });
  }

  onEnviar2(): void {
    console.log('FORM GROUP: ', this.productForm.value);

    this.productSubs = this.productService.addProducts({
        ...this.productForm.value,
        storeId: this.authService.getUserId(),
        storeName: this.onlyName
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
    this.productUpdateSubs = this.productService.updateProducts(
      this.idEdit,
        {
          ...this.productForm.value,
          storeId: this.authService.getUserId(),
          storeName: this.onlyName
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
    this.productGetSubs = this.productService.getProductsById(userId).subscribe( res => {
      // console.log('RESPUESTA: ', Object.entries(res));
      Object.entries(res).map((p: any) => this.products.push({id: p[0],  ...p[1]}));
    });

  }

  onDelete(id: any): void {
    this.productDeleteSubs = this.productService.deleteProducts(id).subscribe(
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


  loadName(): void {
    this.produccts = [];
    let aaa = "ss";
    const userId = this.authService.getUserId();
    this.proGetSubs = this.providerService.getProviderById(userId).subscribe( res => {
      // console.log('RESPUESTA: ', Object.entries(res));
      Object.entries(res).map((p: any) => this.produccts.push({id: p[0],  ...p[1]}));

      aaa = Object.values(this.produccts)[0].storeName;
      console.log('es el mail talvez: ', aaa);
      this.loadOnlyName(aaa);
    });

    console.log('nnnnnnn: ', aaa);


  }

  loadOnlyName(name): void {
    this.onlyName = name;
    console.log('solo el mail: ', this.onlyName);


  }

}
