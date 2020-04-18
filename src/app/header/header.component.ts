import { Component, OnInit, AfterViewInit } from "@angular/core";
import { NavbarService } from "../services/navbar.service";
import { NavbarDropDownService } from "../services/navbar-dropdown.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  constructor(
    private navBarService: NavbarService,
    private dropdwonService: NavbarDropDownService
  ) {}
  activeNav: string;

  scrollTo(item: string) {
    this.navBarService.goToNav(item);
  }
  dropdown = "hidden";
  top = false;

  onDropdown() {
    this.dropdwonService.onDropdown();
  }

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
