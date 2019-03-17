import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookHomeComponent } from './books/book-home/book-home.component';

const routes: Routes = [
    {
        path: '**', component: BookHomeComponent
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {
}
