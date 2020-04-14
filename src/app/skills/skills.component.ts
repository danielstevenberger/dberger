import { Component, OnInit } from '@angular/core';
import { Skill } from './skill.model';
import { SkillsService } from './skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: []
})
export class SkillsComponent implements OnInit {

  open: boolean = false;
  skills: Skill[]

  constructor(private skillService: SkillsService) { }

  ngOnInit(): void {
    this.skills = this.skillService.getSkills()
  }

}
