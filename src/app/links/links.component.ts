import { Component, OnInit } from "@angular/core";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "app-links",
  templateUrl: "./links.component.html",
  styleUrls: ["./links.component.css"],
})
export class LinksComponent implements OnInit {
  faGithubSquare = faGithubSquare;
  faLinkedin = faLinkedin;

  constructor() {}

  ngOnInit(): void {}
}
