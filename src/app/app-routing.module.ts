import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { CartComponent } from './components/cart/cart.component';
import { BrandsComponent } from './components/brands/brands.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    // حطينا الباث فاضي عشان لو اليوزر كتب لوق ان بدون مايكتب اسم النافبار
    
    path: '', component: BlankLayoutComponent, children: [
      { path: '', redirectTo: "home", pathMatch: 'full' },
      { path: "home", component: HomeComponent },
      { path: "cart", component: CartComponent },
      { path: "wish list", component: WishListComponent },
      { path: "products", component: ProductsComponent },
      { path: "categories", component: CategoriesComponent },
      { path: "brands", component: BrandsComponent }
    ]
  },

  {
    path: '', component: AuthLayoutComponent, children: [
      { path: "register", component: RegisterComponent },
      { path: "login", component: LoginComponent }
    ]
  },

  {path: "**" , component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
