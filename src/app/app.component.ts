import {
  Component,
  HostListener,
  ViewChild,
  ElementRef,
  OnInit,
} from "@angular/core";

import { polyfill } from "smoothscroll-polyfill";
import { NavbarService } from "./services/navbar.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "dberger";
  scrolled = true;

  constructor(private navBarService: NavbarService) {}

  @ViewChild("home", { read: ElementRef }) home: ElementRef;
  @ViewChild("skills", { read: ElementRef }) skills: ElementRef;
  @ViewChild("projects", { read: ElementRef }) projects: ElementRef;
  @ViewChild("sayHello", { read: ElementRef }) sayHello: ElementRef;
  @ViewChild("showNav", { read: ElementRef }) showNav: ElementRef;

  onDive(el: HTMLElement) {
    polyfill();
    el.scrollIntoView({ behavior: "smooth" });
  }

  @HostListener("window:scroll", ["$event"])
  onScroll(): void {
    //nav bar current item
    const home = this.home.nativeElement.offsetTop
    const skills = this.skills.nativeElement.offsetTop;
    const projects = this.projects.nativeElement.offsetTop;
    const sayHello = this.sayHello.nativeElement.offsetTop;
    const showNav = this.showNav.nativeElement.offsetTop;

    //logic navbar
    if (showNav <= window.scrollY) {
      this.navBarService.navStatus(true);
    } else {
      this.navBarService.navStatus(false);
    }
    console.log(window.scrollY)
    console.log(window.scrollY - 100)
    // logic for current nav item on scroll
    if (home <= (window.scrollY)  && skills >= window.scrollY + 300) {
      this.navBarService.navUpdate("home");
    } else if (skills <= window.scrollY + 300 && projects >= window.scrollY + 300) {
      this.navBarService.navUpdate("skills");
    } else if (projects <= window.scrollY +300 && sayHello >= window.scrollY +300) {
      this.navBarService.navUpdate("projects");
    } else if (sayHello <= window.scrollY + 300) {
      this.navBarService.navUpdate("sayHello");
    }
    //waves
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight ||
      window.scrollY == 0
    ) {
      this.scrolled = true;
    } else {
      this.scrolled = false;
    }
  }

  ngOnInit() {
    this.navBarService.goToNavItem.subscribe((item: string) => {

      const skills = this.skills.nativeElement;
      const projects = this.projects.nativeElement;
      const sayHello = this.sayHello.nativeElement;

      polyfill();
      if (item == "home") {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }
      if (item == "skills") {
        skills.scrollIntoView({behavior: "smooth" });
      }
      if (item == "projects") {
        projects.scrollIntoView({ behavior: "smooth" });
      }
      if (item == "sayHello") {
        sayHello.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
}
