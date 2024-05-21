import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss',
})
export class MySkillsComponent {
  skillIcons = [
    'angularIcon.svg',
    'tsIcon.svg',
    'jsIcon.svg',
    'htmlIcon.svg',
    'firebaseIcon.svg',
    'gitIcon.svg',
    'cssIcon.svg',
    'apiIcon.svg',
    'scrumIcon.svg',
    'materialdesignIcon.svg',
  ];

  skillNames = [
    'Angular',
    'Typescript',
    'JavaScript',
    'HTML',
    'Firebase',
    'GIT',
    'CSS',
    'Rest-Api',
    'Scrum',
    'Material design',
  ];

  constructor(public translateService: TranslateService) {}
}
