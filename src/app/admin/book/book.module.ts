import { BookEditComponent } from './bookEdit/bookEdit.component';
import { BookDetailComponent } from './bookDetail/bookDetail.component';
import { BookCreateComponent } from './bookCreate/bookCreate.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BookRoutes } from './book.routing';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(BookRoutes),
  ],
  declarations: [
    BookCreateComponent,
    BookDetailComponent,
    BookEditComponent,
  ],
  exports: [RouterModule]
})
export class BookModule { }
