import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BookCategory } from '../models/book-category.enum';
import { BooksStoreService } from '../services/books-store.service';

import { BookHomeComponent } from './book-home.component';

describe('BookHomeComponent', () => {
    let component: BookHomeComponent;
    let fixture: ComponentFixture<BookHomeComponent>;
    let bookStoreService: BooksStoreService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
                declarations: [ BookHomeComponent ],
                schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
                providers: [ BooksStoreService ]

            })
            .compileComponents();
        bookStoreService = TestBed.get(BooksStoreService);
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BookHomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should get the books as they are added', async (() => {
        bookStoreService.addBook({title: `my book`, category: BookCategory.Drama, description: `my description`});
        expect(component.books.length).toBe(1);
        bookStoreService.addBook({title: `my book 2`, category: BookCategory.Drama, description: `my description 2`});
        expect(component.books.length).toBe(2);
    }));
});
