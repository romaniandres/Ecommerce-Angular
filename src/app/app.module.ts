import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDescriptionComponent } from './Product/product-description/product-description.component';
import { ProductListComponent } from './Product/product-list/product-list.component';
import { HeaderComponent } from './Product/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDescriptionComponent,
    ProductListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
