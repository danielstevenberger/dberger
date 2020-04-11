import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";

const appRoutes: Routes = [
  { path: "", component: AppComponent },
  { path: "skills", component: AppComponent },
  { path: "projects", component: AppComponent },
  { path: "contact", component: AppComponent },

  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
