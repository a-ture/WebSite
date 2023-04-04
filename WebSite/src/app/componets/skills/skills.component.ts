import { Component, OnInit } from '@angular/core';
import {Skill} from "../../models/education";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'Angular',
      level: 'Principiante',
      rating: 55,
    },
    {
      name: 'Java, Java EE',
      level: 'Intermedio',
      rating: 70,
    },
    {
      name: 'HTML, CSS, JS',
      level: 'Esperto',
      rating: 90,
    },
    {
      name: 'SQL',
      level: 'Esperto',
      rating: 80,
    },
    {
      name: 'C',
      level: 'Principiante',
      rating: 30,
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
