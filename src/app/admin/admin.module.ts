import { CustomerModule } from './cutomer/customer.module';
import { BookModule } from './book/book.module';
import { RouterModule } from '@angular/router';
import { AdminRoutes } from './admin.routing';
import { BookEditComponent } from './book/bookEdit/bookEdit.component';
import { BookDetailComponent } from './book/bookDetail/bookDetail.component';
import { BookCreateComponent } from './book/bookCreate/bookCreate.component';
import { CustomerListComponent } from './cutomer/customerList/customerList.component';
import { CustomerDetailComponent } from './cutomer/customerDetail/customerDetail.component';
import { CustomerDeleteComponent } from './cutomer/customerDelete/customerDelete.component';
import { EmployeeListComponent } from './employee/employeeList/employeeList.component';
import { EmployeeEditComponent } from './employee/employeeEdit/employeeEdit.component';
import { EmployeeDetailComponent } from './employee/employeeDetail/employeeDetail.component';
import { EmployeeCreateComponent } from './employee/employeeCreate/employeeCreate.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './sideBar/sideBar.component';


@NgModule({
  declarations: [
    SideBarComponent,
    EmployeeCreateComponent,
    EmployeeDetailComponent,
    EmployeeEditComponent,
    EmployeeListComponent,
    
  ],
  imports:[
    RouterModule.forChild(AdminRoutes),
    CommonModule,
    BookModule,
    CustomerModule
  ],
})
export class AdminModule { }
