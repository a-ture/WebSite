import { Component, OnInit } from '@angular/core';
import {Education} from "../../models/education";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educationList: Education[] = [
    {
      institute: "University of Pennsylvania's",
      course: 'MBA',
      duration: '2000-2002',
      score: '80%',
    },
    {
      institute: 'Stanford University',
      course: 'M.S in Material Science',
      duration: '1993-1995',
      score: '75%',
    },
    {
      institute: 'IIT (Madras)',
      course: 'BTech in Metallurgical Engineering',
      duration: '1989-1993',
      score: '85%',
    },
    {
      institute: 'Vana Vani School',
      course: 'HSC',
      duration: '1988-1989',
      score: '80%',
    },
    {
      institute: 'Vana Vani School',
      course: 'SSC',
      duration: '1986-1988',
      score: '90%',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
