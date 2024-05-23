import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, HttpClientModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  burgerMenu: boolean = false;
  public languageDeSelected: boolean = false;
  languages = ['en', 'de'];

  constructor(private translateService: TranslateService) { }

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
  }

  changeLanguage(lang: string) {
    this.translateService.use(lang);
    localStorage.setItem('language', lang);
    this.checkLanguageButton(lang);
  }

  checkLanguageButton(lang: string) {
    this.languageDeSelected = (lang === 'de');
  }
}
