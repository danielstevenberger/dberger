import {
  Component,
  OnInit,
  EventEmitter,
  Output,
} from "@angular/core";
import { NavbarService } from "../services/navbar.service";
import { trigger, transition, style, animate } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  constructor(private navBarService: NavbarService, private router: Router) {}

  activeNav: string;

  scrollTo(item: string) {
    // this.router.navigate([item])
    this.navBarService.goToNav(item)
    // this.activeNav = item;
  }

  top = false;

  ngOnInit(): void {
    this.navBarService.currentNavItem.subscribe((current: string) => {
      this.activeNav = current;
    });

    this.navBarService.navFixed.subscribe((status: Boolean) => {
      if (status) {
        this.top = true;
      } else {
        this.top = false;
      }
    });
  }
}
