import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projekts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projekts.component.html',
  styleUrl: './projekts.component.scss',
})
export class ProjektsComponent {
  exploreHtml =
    'Explore a selection of my work here - interact with projects to see my skills in action';

  projects = [
    {
      projectName: 'Join',
      projectTechnologie: 'HTML | CSS | Javascript',
      projectDescription:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      projectLink: '',
      projectGitHub: 'https://github.com/TimWidl94/Join',
      projectImg: 'assets/img/projects/laptopJoin.png',
    },
    {
      projectName: 'El Polo Loco',
      projectTechnologie: 'HTML | CSS | Javascript',
      projectDescription: 'A simple Jump-and_run game based on an object-oriented approach. Help Pepe to find coins and salsa bottles to fight against the killer chicken.',
      projectLink: '',
      projectGitHub: 'https://github.com/TimWidl94/El-Polo-Loco',
      projectImg: 'assets/img/projects/laptopElPoloLoco.png',
    },
    {
      projectName: 'Pokedex',
      projectTechnologie: 'HTML | CSS | Javascript | Api',
      projectDescription: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      projectLink: '',
      projectGitHub: 'https://github.com/TimWidl94/Pokedex',
      projectImg: 'assets/img/projects/laptopPokemon.png',
    },
  ];
}
