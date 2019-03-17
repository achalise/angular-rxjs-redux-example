import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Book } from '../models/types';

@Injectable({
    providedIn: 'root'
})
export class BooksStoreService {

    private _state = new BehaviorSubject<BookStore>({books: []});

    state$: Observable<BookStore>;

    constructor() {
        this.state$ = this._state.asObservable();
    }

    private get currentState(): BookStore {
        return this._state.getValue();
    }

    addBook(book: Book) {
        const nextState = {...this.currentState, books: [...this.currentState.books, book]};
        this._state.next(nextState);
    }
}

export interface BookStore {
    books: Book[]
}
