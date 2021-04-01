import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth-guard.service';
import { CategoriesComponent } from '../categories/categories.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path:'admin',
    canActivate:[AuthGuard],
    component:AdminComponent,
    children:[{
      path:'',
      children:[
      {path:'products',component:AdminProductsComponent},
      {path:'categories',component:CategoriesComponent}]
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
