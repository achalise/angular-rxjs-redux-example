import { BookCategory } from './book-category.enum';

export interface Book {
    title: string;
    category: BookCategory;
    description: string;
}