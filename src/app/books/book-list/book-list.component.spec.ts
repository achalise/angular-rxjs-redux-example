import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BookDetailComponent } from '../book-detail/book-detail.component';
import { BookCategory } from '../models/book-category.enum';

import { BookListComponent } from './book-list.component';

describe('BookListComponent', () => {
    let component: BookListComponent;
    let fixture: ComponentFixture<BookListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
                declarations: [ BookListComponent, BookDetailComponent ],
                schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BookListComponent);
        component = fixture.componentInstance;
        component.books = [
            { title: 'test title', category: BookCategory.Drama, description: 'some description' }
        ];
        fixture.detectChanges();
    });

    it('should populate template with right values', async(() => {
        expect(component).toBeTruthy();
        const compiled = fixture.debugElement.nativeElement;
        const books: HTMLElement[] = compiled.querySelectorAll('app-book-detail');
        expect(books.length).toBe(1);
        expect(books[0].textContent).toEqual(`Title: test title (Drama)Description: some description`);
    }));
});
