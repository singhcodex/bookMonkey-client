import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/about'},
  {path: 'about', component: AboutComponent},
  {path: 'books', loadChildren: () => import('./book/book.module').then(module => module.BookModule)},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
