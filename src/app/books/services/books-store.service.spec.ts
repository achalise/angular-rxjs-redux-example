import { TestBed } from '@angular/core/testing';
import { map } from 'rxjs/operators';
import { BookCategory } from '../models/book-category.enum';
import { Book } from '../models/types';

import { BooksStoreService } from './books-store.service';

describe('BooksStoreService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: BooksStoreService = TestBed.get(BooksStoreService);
        expect(service).toBeTruthy();
    });

    it(`should publish thew new booklist to state when a book is added`, ((done: DoneFn) => {
        const service: BooksStoreService = TestBed.get(BooksStoreService);
        const state = service.state$.pipe(map(store => store.books));
        service.addBook({ title: 'title1', category: BookCategory.Comedy, description: 'description 1' });

        state.subscribe((books: Book[]) => {
            expect(books.length).toBe(1);
            expect(books[ 0 ].title).toEqual('title1');
            done();
        });

    }))

});
