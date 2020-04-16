import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { HomeComponent } from "./home/home.component";
import { WaveComponent } from "./wave/wave.component";
import { HeaderComponent } from "./header/header.component";
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { SayHelloComponent } from './say-hello/say-hello.component';
import { HeaderAltComponent } from './header-alt/header-alt.component';
import { AppRoutingModule } from './app-routing.model';
import { NavbarDropdownComponent } from './navbar-dropdown/navbar-dropdown.component';
import { LinksComponent } from './links/links.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WaveComponent,
    HeaderComponent,
    SkillsComponent,
    ProjectsComponent,
    SayHelloComponent,
    HeaderAltComponent,
    NavbarDropdownComponent,
    LinksComponent,

  ],
  imports: [BrowserModule, BrowserAnimationsModule, FontAwesomeModule, AppRoutingModule, NgxChartsModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
