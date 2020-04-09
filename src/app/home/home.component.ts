import { Component, OnInit } from "@angular/core";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  faAngleDoubleDown = faAngleDoubleDown;

  constructor() {}

  ngOnInit(): void {}
}
