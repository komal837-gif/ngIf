import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { productsComponent } from 'src/products/products.component';


@NgModule({
  declarations: [
    AppComponent,
    productsComponent
  ],
  imports: [
    BrowserModule,
  
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
