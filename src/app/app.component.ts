import {
  Component,
  HostListener,
  ViewChild,
  ElementRef,
  OnInit,
} from "@angular/core";

import { Location } from "@angular/common";
import { polyfill } from "smoothscroll-polyfill";
import { NavbarService } from "./services/navbar.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "dberger";
  scrolled = true;

  constructor(
    private navBarService: NavbarService,
    private router: Router,
    public location: Location
  ) {

  }

  @ViewChild("home", { read: ElementRef }) home: ElementRef;
  @ViewChild("skills", { read: ElementRef }) skills: ElementRef;
  @ViewChild("projects", { read: ElementRef }) projects: ElementRef;
  @ViewChild("contact", { read: ElementRef }) contact: ElementRef;
  @ViewChild("showNav", { read: ElementRef }) showNav: ElementRef;

  onDive(el: HTMLElement) {
    polyfill();
    el.scrollIntoView({ behavior: "smooth" });
  }

  @HostListener("window:scroll", ["$event"])
  onScroll(): void {
    //nav bar current item
    const home = this.home.nativeElement.offsetTop;
    const skills = this.skills.nativeElement.offsetTop;
    const projects = this.projects.nativeElement.offsetTop;
    const contact = this.contact.nativeElement.offsetTop;
    const showNav = this.showNav.nativeElement.offsetTop;

    //logic navbar
    if (showNav <= window.scrollY) {
      this.navBarService.navStatus(true);
    } else {
      this.navBarService.navStatus(false);
    }
    // logic for current nav item on scroll
    if (home <= window.scrollY && skills >= window.scrollY + 300) {
      // this.router.navigate(["home"]);
      this.navBarService.navUpdate("home");
    } else if (
      skills <= window.scrollY + 300 &&
      projects >= window.scrollY + 300
    ) {
      // this.router.navigate(["skills"]);
      this.navBarService.navUpdate("skills");
    } else if (
      projects <= window.scrollY + 300 &&
      contact >= window.scrollY + 300
    ) {
      // this.router.navigate(["projects"]);
      this.navBarService.navUpdate("projects");
    } else if (contact <= window.scrollY + 300) {
      // this.router.navigate(["contact"]);
      this.navBarService.navUpdate("contact");
    }

    //waves
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight ||
      window.scrollY == 0
    ) {
      console.log(document.body.offsetHeight )
      this.scrolled = true;
    }
    else{
      this.scrolled = false;
    }
  }

  ngOnInit() {
    this.navBarService.goToNavItem.subscribe((item: string) => {
      const skills = this.skills.nativeElement;
      const projects = this.projects.nativeElement;
      const contact = this.contact.nativeElement;

      polyfill();
      if (item == "home") {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }
      if (item == "skills") {
        skills.scrollIntoView({ behavior: "smooth" });
      }
      if (item == "projects") {
        projects.scrollIntoView({ behavior: "smooth" });
      }
      if (item == "contact") {
        contact.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
}
