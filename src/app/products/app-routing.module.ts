import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { LoginComponent } from "../login/login.component";
import { NofoundComponent } from "../nofound/nofound.component";
import { UserComponent } from "../users/user/user.component";
import { UsersComponent } from "../users/users.component";
import { EditProductComponent } from "./edit-product/edit-product.component";
import { ProductComponent } from "./product/product.component";
import { ProductsComponent } from "./products.component";


  const appRoutes:Routes=[
    {path:'',component:HomeComponent},//localhost:4200 url girmezse kullanıcı  home compa gider
    {path:'home',component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'products',component:ProductsComponent, children:[
      {path:':id',component:ProductComponent},// /products ları sildim zaten alt kolu olduğu için başlarına products gelir
      {path:':id/edit',component:EditProductComponent},
    ]},
    // {path:'products:/page:/order',component:ProductsComponent},
    {path:'users',component:UsersComponent,children:[
      {path:':name',component:UserComponent},
    ]},
    {path:'**',component:NofoundComponent}
  ]


  @NgModule(
    {
        imports: [
            RouterModule.forRoot(appRoutes)
        ],
        exports: [RouterModule]
    }
)

export class AppRoutingModule{

}
