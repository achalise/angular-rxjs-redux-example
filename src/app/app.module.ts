import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBookComponent } from './books/add-book/add-book.component';
import { BookHomeComponent } from './books/book-home/book-home.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';

@NgModule({
    declarations: [
        AppComponent,
        BookListComponent,
        BookHomeComponent,
        AddBookComponent,
        BookDetailComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
