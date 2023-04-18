import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { ConfirmLeaveGuard } from './confirm-leave.guard';

const routes: Routes = [
  {path:'', component:BookComponent},
  {path: 'details/:isbn', component: BookDetailComponent, canDeactivate: [ConfirmLeaveGuard]}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class BookRoutingModule { }
