import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Nome', 'Alessia Ture'],
    ['DOB', '23/02/2001'],
    ['Education', 'M.S (1995)'],
    ['Interessi', ''],
  ];

  aboutMe: string[] = [
    "Ciao, sono una lauereanda in informatica all' Università di Salerno.",
    'Worked as Head of Product Management in Google for various technologies (Google Search Engine, Google Drive, Chrome Browser).',
    'Delivered all product withing deadlines. Always eager to learn new technologies.',
    'Currently, working as CEO of Google Alphabet',
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
