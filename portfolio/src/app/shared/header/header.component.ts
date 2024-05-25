import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, HttpClientModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  burgerMenu: boolean = false;
  public languageDeSelected: boolean = false;
  buttonActive: boolean = false;
  linkAboutMeActive: boolean = false;
  linkSkillsActive: boolean = false;
  linkProjectsActive: boolean = false;
  linkContactActive: boolean = false;
  languages = ['en', 'de'];

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    const storedLanguage = localStorage.getItem('language') || 'en';
    this.translateService.setDefaultLang(storedLanguage);
    this.translateService.use(storedLanguage);
    this.checkLanguageButton(storedLanguage);
  }

  toggleBurgerMenu() {
    this.burgerMenu = !this.burgerMenu;
    if (this.burgerMenu) {
      document.body.classList.add('noScroll');
    } else {
      document.body.classList.remove('noScroll');
    }
    this.toggleClassButton();
  }

  changeLanguage(lang: string) {
    this.translateService.use(lang);
    localStorage.setItem('language', lang);
    this.checkLanguageButton(lang);
  }

  checkLanguageButton(lang: string) {
    this.languageDeSelected = lang === 'de';
  }

  toggleClassButton() {
    this.buttonActive = !this.buttonActive;
  }

  activateLink(link: 'aboutMe' | 'skills' | 'projects' | 'contact') {
    this.linkAboutMeActive = link === 'aboutMe';
    this.linkSkillsActive = link === 'skills';
    this.linkProjectsActive = link === 'projects';
    this.linkContactActive = link === 'contact';
    if (this.burgerMenu) {
      this.toggleBurgerMenu();
    }
  }
}
