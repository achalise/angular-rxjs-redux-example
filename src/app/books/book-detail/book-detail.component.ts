import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../models/types';

@Component({
    selector: 'app-book-detail',
    templateUrl: './book-detail.component.html',
    styleUrls: [ './book-detail.component.scss' ]
})
export class BookDetailComponent {

    @Input()
    book: Book;

    constructor() {
    }
}
