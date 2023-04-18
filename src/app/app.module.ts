import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { BookModule } from "./book/book.module";
import {HttpClientModule} from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        PageNotFoundComponent,
        NavigationComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        // BookModule,
        HttpClientModule,
        AppRoutingModule
    ]
})
export class AppModule { }
