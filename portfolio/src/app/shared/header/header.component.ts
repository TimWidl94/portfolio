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
  constructor() {}

  burgerMenu: boolean = false;
  languageDeSelected: boolean = false;

  toggleBurgerMenu() {
    if (!this.burgerMenu) {
      this.burgerMenu = true;
      document.body.classList.add('noScroll');
    } else {
      this.burgerMenu = false;
      document.body.classList.remove('noScroll');
    }
  }

  languages = ['en', 'de'];
  private translateService = inject(TranslateService);

  ngOnInit(): void {
    let defaultLanguage = localStorage.getItem('language') || 'en';
    this.translateService.setDefaultLang(defaultLanguage);
    this.translateService.use(defaultLanguage);
    this.checkLanguageButton(defaultLanguage);
  }

  changeLanguage(lang: string) {
    this.translateService.use(lang);
    localStorage.setItem('language', lang);
    this.checkLanguageButton(lang);
  }

  checkLanguageButton(lang: string){
    if(lang == 'de'){
      this.languageDeSelected = true;
    } else { this.languageDeSelected = false}
  }
}
