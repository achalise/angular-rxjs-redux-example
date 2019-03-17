import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AbstractControl, FormControl, ReactiveFormsModule } from '@angular/forms';
import { BookCategory } from '../models/book-category.enum';
import { BooksStoreService } from '../services/books-store.service';

import { AddBookComponent } from './add-book.component';

describe('AddBookComponent', () => {
    let component: AddBookComponent;
    let fixture: ComponentFixture<AddBookComponent>;
    let bookStoreService: BooksStoreService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
                declarations: [ AddBookComponent ],
                imports: [ ReactiveFormsModule ],
                schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
            })
            .compileComponents();
        bookStoreService = TestBed.get(BooksStoreService);
    }));

    beforeEach(() => {
        spyOn(bookStoreService, 'addBook').and.callThrough();
        fixture = TestBed.createComponent(AddBookComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should validate the fields correctly and not allow the form to be submitted if errors exist', () => {
        const title: AbstractControl = component.title;
        title.setValue('');
        expect(title.invalid).toBe(true);
        title.setValue(`my title`);
        expect(title.invalid).toBe(false);
        expect(component.addBookForm.valid).toBe(false);
        component.submit();
        expect(bookStoreService.addBook).not.toHaveBeenCalled();
    });

    it(`should sbmit the form successfully if no error present`, () => {
        component.title.setValue(`my title`);
        component.category.setValue(BookCategory.Comedy);
        component.description.setValue(`My Description`);
        expect(component.addBookForm.valid).toBe(true);
        component.submit();
        expect(bookStoreService.addBook).toHaveBeenCalled();
    })
});
