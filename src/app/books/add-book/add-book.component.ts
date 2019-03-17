import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookCategory } from '../models/book-category.enum';
import { Book } from '../models/types';
import { BooksStoreService } from '../services/books-store.service';

@Component({
    selector: 'app-add-book',
    templateUrl: './add-book.component.html',
    styleUrls: [ './add-book.component.scss' ]
})
export class AddBookComponent implements OnInit {

    addBookForm: FormGroup;
    categories = Object.keys(BookCategory).map(k => BookCategory[ k ]);

    constructor(private fb: FormBuilder, private bookStoreService: BooksStoreService) {
        this.addBookForm = fb.group({
            title: [ '', [ Validators.required, Validators.maxLength(30) ] ],
            category: [ '', Validators.required ],
            description: [ '', Validators.required ]
        })
    }

    ngOnInit() {
    }

    get title(): AbstractControl {
        return this.addBookForm.controls[ 'title' ];
    }

    get category(): AbstractControl {
        return this.addBookForm.controls[ 'category' ];
    }

    get description(): AbstractControl {
        return this.addBookForm.controls[ 'description' ];
    }

    submit() {
        const bookDetails: Book = this.addBookForm.getRawValue();
        if (this.addBookForm.invalid) {
            this.markFormGroupTouched(this.addBookForm);
        } else {
            this.bookStoreService.addBook(bookDetails);
            this.addBookForm.reset({ category: '' });
        }

    }

    /**
     * Mark all formcontrols as touched so the error messages are displayed
     * @param formGroup
     */
    private markFormGroupTouched(formGroup: FormGroup) {
        (<any>Object).values(formGroup.controls).forEach(control => {
            control.markAsTouched();

            if (control.controls) {
                this.markFormGroupTouched(control);
            }
        });
    }
}
