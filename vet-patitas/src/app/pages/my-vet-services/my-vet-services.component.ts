import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { VetsService } from 'src/app/shared/services/vets.service';
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

  vetStoreNameGetSubs: Subscription;
  storeName = "default";
  veterinary = [];

  minDate: Date;
  maxDate: Date;
  noombre = "nada";
  vet = [];
  vetGetSubs: Subscription;
  onlyName: any;
  prueba = [];

  constructor(private formBuilder: FormBuilder, private productService: VetServicesService, private authService: AuthService, private vetService: VetsService) { }

  ngOnInit(): void {


    const currentYear = new Date().getFullYear();
    const currentDay = new Date().getDate();
    const currentMonth = new Date().getMonth();
    this.minDate = new Date(currentYear, currentMonth, currentDay);
    this.maxDate = new Date(currentYear, currentMonth+3, 31);
    //console.log('diaaaaaaaaaaaaaaaaa: ', currentDay);
    this.loadProducts();
    this.loadName();
    //this.loadVeterinary();
    //console.log('aaaaaaaaaaaaaaaaaaaaa: ', this.loadVeterinary());


    this.productForm = this.formBuilder.group({
      description: ['', [ Validators.required, Validators.minLength(10), Validators.maxLength(140)]],
      imageUrl: ['', [Validators.required, Validators.minLength(5)]], 
      stock: ['', [Validators.required, Validators.pattern("^[1-9][0-9]*$"), Validators.maxLength(4)]],
      storeId: '',
      date: ['', Validators.required],
      hour: ['', Validators.required],
      title: ['', [ Validators.required, Validators.minLength(5), Validators.maxLength(32)]],
    });

  }


  loadVeterinary():void {
    this.veterinary = [];
    const userId = this.authService.getUserId();
    this.vetStoreNameGetSubs = this.vetService.getVetsById(userId).subscribe( res => {
      //console.log('RESPUESTA PROVIDER: ', Object.entries(res).length);
      console.log('datoooooos vet: ', Object.entries(res));
      Object.entries(res).map((p: any) => this.veterinary.push({id: p[0],  ...p[1]}));
      //console.log(' vet: ', this.veterinary);

      console.log('nmooombre vet: ', this.storeName);
      this.noombre = this.storeName;
    });
    for(let i=0; i <= this.veterinary.length; i++ ){
      console.log(' iteracion: ', this.veterinary[0]);
      this.storeName = this.veterinary[0];
    }
    console.log(' vet: ', this.veterinary);

  }

  loadName(): void {
    this.vet = [];
    let aaa = "ss";
    const userId = this.authService.getUserId();
    this.vetGetSubs = this.vetService.getVetsById(userId).subscribe( res => {
      // console.log('RESPUESTA: ', Object.entries(res));
      Object.entries(res).map((p: any) => this.vet.push({mmm: p[0],  ...p[1]}));
      console.log('aaaaa: ', Object.values(this.vet)[0].mail);
      aaa = Object.values(this.vet)[0].storeName;
      this.loadOnlyName(aaa);
    });

    console.log('nnnnnnn: ', aaa);


  }

  loadOnlyName(name): void {
    this.onlyName = name;
    console.log('solo el mail: ', this.onlyName);


  }


  onEnviar2(): void {
    console.log('FORM GROUP: ', this.productForm.value);

    this.productSubs = this.productService.addServices({
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
