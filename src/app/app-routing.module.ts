import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
//import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { HomeComponent } from './common/home/home.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/hotels', pathMatch: 'full' },
    {
        path: 'hotels',
        component: HomeComponent
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes, { useHash: true }) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }