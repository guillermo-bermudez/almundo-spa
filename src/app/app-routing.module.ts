import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HotelsListComponent } from './hotels-list/hotels-list.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/hotels', pathMatch: 'full' },
    {
        path: 'hotels',
        component: HotelsListComponent
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes, { useHash: true }) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }