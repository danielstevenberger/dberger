import {
  Component,
  Output,
  EventEmitter,
  AfterViewInit,
} from "@angular/core";
import {
  faAngleDoubleDown,
  faPlay,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  animations: [
    trigger("bgImgTrigger", [
      state(
        "none, void",
        style({
          opacity: "0",
        })
      ),
      state(
        "maximum",
        style({
          opacity: "1",
        })
      ),
      transition("none => maximum", animate("1s")),
    ]),
  ],
})
export class HomeComponent implements AfterViewInit{
  state: string = "none";

  faAngleDoubleDown = faAngleDoubleDown;
  faPlay = faPlay;
  faPause = faPause;
  @Output() dive = new EventEmitter();

  onDive() {
    // window.scrollTo({
    //   top: window.innerHeight,
    //   left: 0,
    //   behavior: 'smooth'
    // });
    this.dive.emit();
  }

  ngAfterViewInit() {
    this.state = "maximum";
  }

}
