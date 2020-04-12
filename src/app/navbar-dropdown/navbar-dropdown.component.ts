import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-navbar-dropdown',
  templateUrl: './navbar-dropdown.component.html',
  styleUrls: ['./navbar-dropdown.component.css'],
  animations: [
    trigger("dropdownState", [
      state(
        "hidden",
        style({
          top: "-100vh",
        })
      ),
      state(
        "visible",
        style({
          top: "0",
        })
      ),
      transition("visible <=> hidden", [animate("1s ease")]),
    ]),
  ],
})
export class NavbarDropdownComponent implements OnInit {
  @Input() state: string;

  constructor(private navbarService: NavbarService) {
    this.state = 'hidden'
  }

  scrollTo(item: string) {
    this.navbarService.goToNav(item)
    this.state = 'hidden'
  }

  ngOnInit(): void {
  }

}
