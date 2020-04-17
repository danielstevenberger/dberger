import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"],
})
export class ProjectsComponent implements OnInit {
  animalHrIndex = 0;
  ccIndex = 0;

  animalHrImgs = [
    "/assets/img/projects/animalhr1.png",
    "/assets/img/projects/animalhr2.png",
    "/assets/img/projects/animalhr3.png",
  ];

  ccImgs = [
    "/assets/img/projects/cc1.png",
    "/assets/img/projects/cc2.png",
    "/assets/img/projects/cc3.png",
  ];

  constructor() {}

  ngOnInit(): void {}

  changeImage(project: string) {
    if (project == "animal") {
      if (this.animalHrIndex == 2) {
        this.animalHrIndex = 0;
      } else {
        this.animalHrIndex++;
      }
    }
    if (project == "cc") {
      if (this.ccIndex == 2) {
        this.ccIndex = 0;
      } else {
        this.ccIndex++;
      }
    }
  }
}
