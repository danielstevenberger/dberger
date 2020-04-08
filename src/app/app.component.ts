import { Component, HostListener } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "dberger";

  scrolled: boolean;

  @HostListener("window:scroll", ["$event"])
  onScroll(): void {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight ||
      window.scrollY == 0
    ) {
      this.scrolled = true;
    } else {
      this.scrolled = false;
    }
  }
}
