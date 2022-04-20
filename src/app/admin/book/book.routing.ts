import { BookDetailComponent } from './bookDetail/bookDetail.component';
import { BookEditComponent } from './bookEdit/bookEdit.component';
import { BookCreateComponent } from './bookCreate/bookCreate.component';
import { Routes } from '@angular/router';

export const BookRoutes: Routes = [
  { path: 'create',   component: BookCreateComponent },
  { path: 'edit/:id', component: BookEditComponent },
  { path: 'detail',   component: BookDetailComponent },
];