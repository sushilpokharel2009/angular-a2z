import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      { path: "**", redirectTo: "home" },
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "about",
        component: AboutComponent
      },
      {
        path: "contact",
        component: ContactComponent
      }
    ])
  ],
  providers: [],
  exports: [RouterModule]
})
export class AppRoute {}
