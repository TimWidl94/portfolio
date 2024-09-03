import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-projekts',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './projekts.component.html',
  styleUrl: './projekts.component.scss',
})
export class ProjektsComponent {
  constructor(public translateService: TranslateService) {}

  private languageChangeSubscription: Subscription | undefined;

  projects = [
    {
      projectName: 'Join',
      projectTechnologie: 'HTML | CSS | JavaScript',
      projectDescription:
        'portfolio.join',
      projectLink: 'https://join.Tim-Widl.de/logIn.html',
      projectGitHub: 'https://github.com/TimWidl94/Join',
      projectImg: 'laptopJoin.png',
      translatedDescription: '',
    },
    {
      projectName: 'El Pollo Loco',
      projectTechnologie: 'HTML | CSS | JavaScript',
      projectDescription:
        'portfolio.epl',
      projectLink: 'https://el-polo-loco.Tim-Widl.de',
      projectGitHub: 'https://github.com/TimWidl94/El-Polo-Loco',
      projectImg: 'laptopElPoloLoco.png',
      translatedDescription: '',
    },
  ];

  ngOnInit(): void {
    this.translateProjectDescriptions();
    this.languageChangeSubscription = this.translateService.onLangChange.subscribe(() => {
      this.translateProjectDescriptions();
    });
  }

  ngOnDestroy(): void {
    if (this.languageChangeSubscription) {
      this.languageChangeSubscription.unsubscribe();
    }
  }
  translateProjectDescriptions(): void {
    this.projects.forEach((project) => {
      const translationKey = `portfolio.${project.projectDescription}`;
      this.translateService.get(translationKey).subscribe((translatedDescription: string) => {
        project.translatedDescription = translatedDescription;
      });
    });
  }

}
