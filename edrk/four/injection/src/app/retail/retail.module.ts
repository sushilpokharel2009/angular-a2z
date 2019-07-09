import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { RetailComponent } from './retail.component';
import { ProductService } from '../services/products.service';



@NgModule({
    declarations: [
        RetailComponent
      ],
      imports: [
        BrowserModule
      ],
      providers: [ProductService],
      bootstrap: [RetailComponent] 
})

export class RetailModule {
    
}