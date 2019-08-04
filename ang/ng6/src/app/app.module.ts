import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { DirectiveDirective } from "./directive.directive";
import { AppRoute } from "./app.route";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { HttpClientModule } from "@angular/common/http";
import { ProductService } from "./product.service";
import { PipePipe } from "./pipe.pipe";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
} from "@angular/material";
import { DragDropModule } from "@angular/cdk/drag-drop";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    DirectiveDirective,
    LoginComponent,
    RegisterComponent,
    PipePipe
  ],
  imports: [
    BrowserModule,
    AppRoute,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    DragDropModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
