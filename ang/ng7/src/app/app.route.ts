import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      { path: "**", redirectTo: "home" },
      { path: "", component: HomeComponent },
      { path: "dashboard", component: DashboardComponent }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoute {}
