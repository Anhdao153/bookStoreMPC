import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDeleteComponent } from './customerDelete/customerDelete.component';
import { CustomerDetailComponent } from './customerDetail/customerDetail.component';
import { CustomerListComponent } from './customerList/customerList.component';
import { CustomerRoutes } from './customer.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CustomerRoutes)
  ], declarations: [
    CustomerDeleteComponent,
    CustomerDetailComponent,
    CustomerListComponent,
  ]

})
export class CustomerModule { }
