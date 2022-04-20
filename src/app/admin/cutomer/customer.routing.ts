import { CustomerDeleteComponent } from './customerDelete/customerDelete.component';
import { CustomerDetailComponent } from './customerDetail/customerDetail.component';
import { CustomerListComponent } from './customerList/customerList.component';
import { Routes, RouterModule } from '@angular/router';


export const CustomerRoutes: Routes = [
  { path: 'list',   component: CustomerListComponent },
  { path: 'delete', component: CustomerDeleteComponent },
  { path: 'detail',   component: CustomerDetailComponent },
];