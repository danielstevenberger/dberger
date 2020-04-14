import {
  Component,
  OnInit,
  AfterViewInit
} from "@angular/core";
import { NavbarService } from "../services/navbar.service";
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
  animations: [
    trigger('bgImgTrigger', [
        state('none, void', style({
          top: '-10vh'
        })),
        state('maximum', style({})),
        transition('none => maximum', animate('2s ease'))
    ])
],
})
export class HeaderComponent implements OnInit, AfterViewInit{
  constructor(private navBarService: NavbarService, private router: Router) {}
  state = 'none';
  activeNav: string;

  scrollTo(item: string) {
    // this.router.navigate([item])
    this.navBarService.goToNav(item)
    // this.activeNav = item;
  }
  dropdown = 'hidden'
  top = false;

  onDropdown(){

    if (this.dropdown == 'hidden'){
      this.dropdown = 'visible';
    }
    else{
      this.dropdown = 'hidden';
    }

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

  ngAfterViewInit(){
    this.state = 'maximum'
  }
}
