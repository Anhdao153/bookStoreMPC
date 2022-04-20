
import { Routes } from '@angular/router';

export const AdminRoutes: Routes =[
  { path: 'book', loadChildren: () => import('./book/book.module').then(module => module.BookModule)},
  { path: 'employee', loadChildren: () => import('./employee/employee.module').then(module => module.EmployeeModule)},
  { path: 'customer', loadChildren: () => import('./cutomer/customer.module').then(module => module.CustomerModule)},
]