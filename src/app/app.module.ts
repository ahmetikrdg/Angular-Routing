import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { RouterModule, Routes } from '@angular/router';
import { NofoundComponent } from './nofound/nofound.component';
import { ProductComponent } from './products/product/product.component';
import { UserComponent } from './users/user/user.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { AppRoutingModule } from './products/app-routing.module';
import { AdminModule } from './admin/admin.module';
import { AuthGuard } from './auth-guard.service';
import { LoginComponent } from './login/login.component';

// const appRoutes:Routes=[
//   {path:'',component:HomeComponent},//localhost:4200 url girmezse kullanıcı  home compa gider
//   {path:'home',component:HomeComponent},
//   {path:'products',component:ProductsComponent, children:[
//     {path:':id',component:ProductComponent},// /products ları sildim zaten alt kolu olduğu için başlarına products gelir
//     {path:':id/edit',component:EditProductComponent},
//   ]},
//   // {path:'products:/page:/order',component:ProductsComponent},
//   {path:'users',component:UsersComponent,children:[
//     {path:':name',component:UserComponent},
//   ]},
//   {path:'**',component:NofoundComponent}
// ]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    UsersComponent,
    CategoriesComponent,
    NofoundComponent,
    ProductComponent,
    UserComponent,
    EditProductComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
