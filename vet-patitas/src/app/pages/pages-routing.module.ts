import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeauthGuard } from '../shared/guards/homeauth.guard';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
      canActivate: [HomeauthGuard]
    },
      {path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)},
      {path: 'vet-services', loadChildren: () => import('./vet-services/vet-services.module').then(m => m.VetServicesModule)},
      {path: 'contact-us', loadChildren: () => import('./contact-us/contact-us.module').then(m => m.ContactUsModule)},
      {path: 'my-products', loadChildren: () => import('./my-products/my-products.module').then(m => m.MyProductsModule)},
      {path: 'my-vet-services', loadChildren: () => import('./my-vet-services/my-vet-services.module').then(m => m.MyVetServicesModule)},
      {path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    HomeauthGuard
  ]
})
export class PagesRoutingModule { }
