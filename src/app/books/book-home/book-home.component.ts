import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { Book } from '../models/types';
import { BooksStoreService, BookStore } from '../services/books-store.service';

@Component({
    selector: 'app-book-home',
    templateUrl: './book-home.component.html',
    styleUrls: [ './book-home.component.scss' ]
})
export class BookHomeComponent implements OnInit, OnDestroy {
    bookStore$: Observable<BookStore>;
    unsubscribe$ = new Subject<void>();

    books: Book[];

    constructor(private bookStoreService: BooksStoreService) {
    }

    ngOnInit() {
        this.bookStore$ = this.bookStoreService.state$;
        this.bookStore$.pipe(takeUntil(this.unsubscribe$), map(store => store.books)).subscribe(books => {
            this.books = books;
        });
    }

    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
