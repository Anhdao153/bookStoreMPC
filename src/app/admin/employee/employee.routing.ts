import { EmployeeCreateComponent } from './employeeCreate/employeeCreate.component';
import { EmployeeEditComponent } from './employeeEdit/employeeEdit.component';
import { EmployeeDetailComponent } from './employeeDetail/employeeDetail.component';
import { EmployeeListComponent } from './employeeList/employeeList.component';
import { Routes, RouterModule } from '@angular/router';



export const EmployeeRoutes: Routes = [
  { path: 'list',   component: EmployeeListComponent },
  { path: 'detail', component: EmployeeDetailComponent },
  { path: 'create', component: EmployeeCreateComponent },
  { path: 'edit/:id',   component: EmployeeEditComponent },
];