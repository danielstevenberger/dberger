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
import * as AOS from "aos";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.css"],
})
export class SkillsComponent implements OnInit {
  //chart
  view: any[] = [700, 400];
  active = 'l';
  scheme = 'picnic';

  languages: any[] = [
    {
      name: "HTML",
      value: 90,
    },
    {
      name: "CSS",
      value: 80,
      extra: {
        code: "us",
      },
    },
    {
      name: "JavaScript",
      value: 80,
      extra: {
        code: "fr",
      },
    },
    {
      name: "Typescript",
      value: 60,
      extra: {
        code: "uk",
      },
    },
    {
      name: "Java",
      value: 30,
      extra: {
        code: "es",
      },
    },
    {
      name: "Python",
      value: 20,
      extra: {
        code: "it",
      },
    },
  ];

  frameWorks: any[] = [
    {
      name: "Bootstrap",
      value: 90,
      extra: {
        code: "us",
      },
    },
    {
      name: "Angular",
      value: 70,
    },
    {
      name: "Node.Js",
      value: 70,
    },
    {
      name: "jQuery",
      value: 70,
    },
    {
      name: "Material",
      value: 70,
    },
    {
      name: "Mongoose",
      value: 70,
    },
    {
      name: "Express",
      value: 70,
    },
  ];

  design: any[] = [
    {
      name: "Figma",
      value: 90,
      extra: {
        code: "us",
      },
    },
    {
      name: "Skecth",
      value: 70,
    },
    {
      name: "Photoshop",
      value: 70,
    },
    {
      name: "MongoDB",
      value: 70,
    },
    {
      name: "MySQL",
      value: 70,
    },

  ];

  selected = this.languages;

  // options
  animations = true;
  label = "Total";
  tooltipDisabled = "true";
  minWidth = 100;
  colorScheme = this.scheme;
  designedTotal = "100";

  //icons
  faArrowCircleRight = faArrowCircleRight;
  faLightbulb = faLightbulb;
  faMobileAlt = faMobileAlt;
  faMagic = faMagic;
  faRainbow = faRainbow;

  open: boolean = false;
  skills: Skill[];

  constructor(private skillService: SkillsService) {}

  onClick(skill: string) {
    if (skill == "l") {
      this.scheme = 'picnic'
      this.active = 'l'
      this.selected = this.languages;
    }
    if (skill == "f") {
      this.active = 'f'
      this.selected = this.frameWorks;
    }
    if (skill == "d") {
      this.active = 'd'
      this.selected = this.design;
    }
  }

  ngOnInit(): void {
    AOS.init();
  }
}
