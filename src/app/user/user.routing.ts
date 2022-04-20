import { ProductOrderComponent } from './productOrder/productOrder.component';
import { HomeComponent } from './home/home.component';
import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './productList/productList.component';
import { ContactComponent } from './contact/contact.component';

export const UserRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'product', component: ProductListComponent},
  {path: 'order', component: ProductOrderComponent},
  {path: 'contact', component: ContactComponent},
];

