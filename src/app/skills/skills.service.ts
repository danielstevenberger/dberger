import { Injectable } from '@angular/core';
import { Skill } from "src/app/skills/skill.model";

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  private skills: Skill[] = [
    new Skill(
      'Angular',
      '/assets/img/skills/angular.png',
      'Angular Description'
    ),
    new Skill(
      'CSS',
      '/assets/img/skills/css.png',
      'CSS Description'
    ),
    new Skill(
      'HTML',
      '/assets/img/skills/html.png',
      'HTML Description'
    ),
    new Skill(
      'Bootstrap',
      '/assets/img/skills/bootstrap.png',
      'Bootstrap Description'
    ),
    new Skill(
      'JavaScript',
      '/assets/img/skills/js.png',
      'JavaScript Description'
    ),
    new Skill(
      'TypeScript',
      '/assets/img/skills/ts.png',
      'TypeScript Description'
    ),
    new Skill(
      'Material',
      '/assets/img/skills/material.png',
      'Material Description'
    ),
    new Skill(
      'Figma',
      '/assets/img/skills/figma.png',
      'Figma Description'
    ),
  ]

  constructor() { }

  getSkills(){
    return this.skills.slice()
  }
}
