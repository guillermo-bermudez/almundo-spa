import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { HeaderComponent } from './common/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HotelsService } from './services/hotels/hotels.service';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from './common/filter/filter.component';
import { HomeComponent } from './common/home/home.component';
import { SharedServiceService } from './services/shared/shared-service.service';


@NgModule({
  declarations: [
    AppComponent,
    HotelsListComponent,
    HeaderComponent,
    FilterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HotelsService,
    SharedServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
