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
          transform: "translateY(-200px)",
        })
      ),
      state(
        "below",
        style({
          transform: "translateY(400px)",
        })
      ),
      transition("above => below", [
        animate(
          "1.5s ease-in",
          style({
            transform: "translate(1500px, -200px)",
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
  @Input() scrolled: boolean;

  state = "below";

  constructor() {}

  onWaves() {
    this.state == "below" ? (this.state = "above") : (this.state = "below");
  }

  ngOnInit(): void {}
}
