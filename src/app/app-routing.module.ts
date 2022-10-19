import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { AdminComponent } from './pages/admin/admin.component';
const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "admin", component: AdminComponent, children: [
      { path: "home", component: HomeComponent },
      { path: "list", component: ProductListComponent },
      { path: "add", component: ProductAddComponent },
    ]
  },
  { path: "edit/:id", component: ProductAddComponent }
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
