import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutes } from './employee.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(EmployeeRoutes)
  ],
})
export class EmployeeModule { }
