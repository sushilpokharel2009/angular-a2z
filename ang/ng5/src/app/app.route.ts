import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { FeatureComponent } from "./feature/feature.component";

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "about", component: AboutComponent },
      { path: "contact", component: ContactComponent },
      { path: "feature", component: FeatureComponent },
      { path: "dashboard", component: DashboardComponent }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoute {}
