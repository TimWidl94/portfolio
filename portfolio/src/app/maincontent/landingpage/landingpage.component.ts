import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent implements OnInit, OnDestroy {
  private setLanguage: Subscription | undefined;
  languageDeSelected: boolean = false;
  defaultLanguage: string = "";

  constructor(public translateService: TranslateService) { }

  ngOnInit(): void {
    this.setLanguage = this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.useLang(event.lang);
      console.log("Language changed, subscription value:", this.setLanguage);
    });

    // Initial language setup
    const storedLanguage = localStorage.getItem('language') || 'en';
    this.translateService.setDefaultLang(storedLanguage);
    this.translateService.use(storedLanguage);
    this.useLang(storedLanguage);
  }

  ngOnDestroy(): void {
    if (this.setLanguage) {
      this.setLanguage.unsubscribe();
    }
  }

  useLang(lang: string): void {
    this.defaultLanguage = lang;
    if (lang === 'de') {
      this.languageDeSelected = true;
    } else {
      this.languageDeSelected = false;
    }
  }
}
