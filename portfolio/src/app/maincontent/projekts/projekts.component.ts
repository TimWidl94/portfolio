import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projekts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projekts.component.html',
  styleUrl: './projekts.component.scss'
})
export class ProjektsComponent {
exploreHtml = "Explore a selection of my work here - interact with projects to see my skills in action";


projects = [
  {projectName: "Join",
  projectTechnologie: "HTML | CSS | Javascript",
  projectLink: "",
  projectGitHub: "https://github.com/TimWidl94/Join",
  projectImg: "assets/img/projects/laptopJoin.png",
  },
  {projectName: "El Polo Loco",
  projectTechnologie: "HTML | CSS | Javascript",
  projectLink: "",
  projectGitHub: "https://github.com/TimWidl94/El-Polo-Loco",
  projectImg: "assets/img/projects/elPoloLocoLaptop.svg",
  },
  {projectName: "Pokedex",
  projectTechnologie: "HTML | CSS | Javascript | Api",
  projectLink: "",
  projectGitHub: "https://github.com/TimWidl94/Pokedex",
  projectImg: "",
  }
]
}
