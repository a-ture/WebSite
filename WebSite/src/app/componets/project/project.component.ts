import { Component, OnInit } from '@angular/core';
import {Project} from "../../models/education";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects: Project[] = [
    {
      title: 'WoodLot',
      technologies: 'Angular, SpringBoot',
      description: [
        "WoodLot è un e-commerce per l'acquisto simbolico di un albero. Gli utenti possono acquistare (comprendo così i " +
        "costi iniziali dela piantumazione ) un albero che" +
        " verrà piantato da un contadino, che potrà godere dei suoi frutti. Gli alberi sono assegnati ai contadini tramite " +
        "un algoritmo di intelligenza artificiale (realizzato per il corso di Fondamenti di Intelligenza Artificiale)",
        "Progetto realizzato per il corso di Ingegneria del Software nell'anno accademico A.A 2022/2023.",
        "Grazie a questo progetto ho imparato la gestione delle scadenze e l'importanza della documentazione"
      ],
    },
    {
      title: 'WoodLot-TSW',
      technologies: 'Servlet, JSP',
      description: [
        "Progetto realizzato per il corso di Tecnologie Software per il Web nell'anno accademico A.A 2022/2023.",
        'WoodLot è un e-commerce per l\'acquisto simbolico di un albero',
        'Grazie a questo progetto ho imparato a lavorare in gruppo.',
      ],
    },
    {
      title: 'EvoDoodle',
      technologies: 'Three.js',
      description: [
        '',
      ],
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
