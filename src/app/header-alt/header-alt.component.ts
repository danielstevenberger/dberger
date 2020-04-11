import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { NavbarService } from "../services/navbar.service";
import {
  trigger,
  transition,
  style,
  animate,
  state,
} from "@angular/animations";
import { Router } from '@angular/router';

@Component({
  selector: "app-header-alt",
  templateUrl: "./header-alt.component.html",
  styleUrls: ["./header-alt.component.css"],
  animations: [
    trigger("navState", [
      state(
        "hidden",
        style({
          opacity: "0",
        })
      ),
      state(
        "visible",
        style({
          opacity: "1",
        })
      ),
      transition("visible <=> hidden", [animate("1s ease")]),
    ]),
  ],
})
export class HeaderAltComponent implements OnInit {
  constructor(private navBarService: NavbarService, private router: Router) {}

  activeNav: string;

  scrollTo(item: string) {
    // this.router.navigate([item])
    this.navBarService.goToNav(item)
    // this.activeNav = item;
  }

  state = "hidden";
  top = false;

  ngOnInit(): void {
    this.navBarService.currentNavItem.subscribe((current: string) => {
      this.activeNav = current;
    });

    this.navBarService.navFixed.subscribe((status: Boolean) => {
      if (status) {
        this.top = true;
        this.state = "visible";
      } else {
        this.state = "hidden";
        this.top = false;
      }
    });
  }
}
