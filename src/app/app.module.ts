import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { HomeComponent } from "./home/home.component";
import { WaveComponent } from "./wave/wave.component";
import { SubmarineComponent } from "./submarine/submarine.component";
import { HeaderComponent } from "./header/header.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WaveComponent,
    SubmarineComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
