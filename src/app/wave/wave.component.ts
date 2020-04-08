import { Component, OnInit, Input } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";

@Component({
  selector: "app-wave",
  templateUrl: "./wave.component.html",
  styleUrls: ["./wave.component.css"],
  animations: [
    trigger("divState", [
      state(
        "above",
        style({
          transform: "translateY(0)",
        })
      ),
      state(
        "below",
        style({
          transform: "translateY(200px)",
        })
      ),
      transition("above => below", [
        animate(
          "1.5s ease-in",
          style({
            transform: "translateX(1500px)",
          })
        ),
      ]),
      transition("below => above", animate("1.5s ease")),
    ]),
    trigger("scrollState", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("1s ease-out", style({ opacity: 1 })),
      ]),
      transition(":leave", [
        style({ opacity: 1 }),
        animate("1s ease-in", style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class WaveComponent implements OnInit {
  @Input() scrolled: string;

  state = "above";

  constructor() {}

  onWaves() {
    this.state == "below" ? (this.state = "above") : (this.state = "below");
  }

  ngOnInit(): void {}
}
