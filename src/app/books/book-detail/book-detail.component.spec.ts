import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BookCategory } from '../models/book-category.enum';

import { BookDetailComponent } from './book-detail.component';

describe('BookDetailComponent', () => {
    let component: BookDetailComponent;
    let fixture: ComponentFixture<BookDetailComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
                declarations: [ BookDetailComponent ]
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BookDetailComponent);
        component = fixture.componentInstance;
        component.book = { title: 'test title', category: BookCategory.Drama, description: 'some description' };
        fixture.detectChanges();
    });

    it('should populate template with right values', () => {
        expect(component).toBeTruthy();
        const elements: Element[] = fixture.debugElement.nativeElement.querySelectorAll('.book-detail')
        expect(elements.length).toEqual(1);
        expect(elements[ 0 ].textContent).toContain('test title');
    });
});
