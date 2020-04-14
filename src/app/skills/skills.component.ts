import { Component, OnInit } from "@angular/core";
import { Skill } from "./skill.model";
import { SkillsService } from "./skills.service";
import {
  faArrowCircleRight,
  faLightbulb,
  faMobileAlt,
  faMagic,
  faRainbow,
} from "@fortawesome/free-solid-svg-icons";
// import * as AOS from "node_modules/aos";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.css"],
})
export class SkillsComponent implements OnInit {
  //chart
  view: any[] = [700, 400];

  languages: any[] = [
    {
      "name": "HTML",
      "value": 90,
    },
    {
      "name": "CSS",
      "value": 80,
      "extra": {
        "code": "us"
      }
    },
    {
      "name": "JavaScript",
      "value": 80,
      "extra": {
        "code": "fr"
      }
    },
    {
      "name": "Typescript",
      "value": 60,
      "extra": {
        "code": "uk"
      }
    },
    {
      "name": "Java",
      "value": 50,
      "extra": {
        "code": "es"
      }
    },
    {
      "name": "Python",
      "value": 50,
      "extra": {
        "code": "it"
      }
    }
  ];

  frameWorks: any[] = [
    {
      "name": "Bootstrap",
      "value": 90,
      "extra": {
        "code": "us"
      }
    },
    {
      "name": "Angular",
      "value": 70,
    }
  ];

  selected = this.languages;

  // options
  animations = true;
  label = "Total";
  tooltipDisabled = "false"
  minWidth = 100;
  colorScheme = "picnic"
  designedTotal="100"

  //icons
  faArrowCircleRight = faArrowCircleRight;
  faLightbulb = faLightbulb;
  faMobileAlt = faMobileAlt;
  faMagic = faMagic;
  faRainbow = faRainbow;

  open: boolean = false;
  skills: Skill[];

  constructor(private skillService: SkillsService) {}

  onClick(skill: string){
    this.selected = this.frameWorks;
  }

  ngOnInit(): void {
    // AOS.init();
  }
}
