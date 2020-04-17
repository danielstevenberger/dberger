import { Component, Output, EventEmitter } from "@angular/core";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  faAngleDoubleDown = faAngleDoubleDown;

  @Output() dive = new EventEmitter();

  onDive() {
    this.dive.emit();
  }
}
