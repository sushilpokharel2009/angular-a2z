import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      { path: "**", redirectTo: "home" },
      {
        path: "login",
        component: LoginComponent,
        children: [
          { path: "", component: HomeComponent },
          { path: "about", component: AboutComponent },
          { path: "contact", component: ContactComponent }
        ]
      },
      {
        path: "register",
        component: RegisterComponent
      }
    ])
  ],
  providers: [],
  exports: [RouterModule]
})
export class AppRoute {}
