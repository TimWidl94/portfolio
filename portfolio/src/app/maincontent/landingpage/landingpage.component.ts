import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
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

  constructor(public translateService: TranslateService) {
  }

  ngOnInit(): void {
    this.setLanguage = this.translateService.onLangChange.subscribe(() => {
      this.useLang();
      console.log("Language changed, subscription value:", this.setLanguage);
    });
  }

  ngOnDestroy(): void {
    if (this.setLanguage) {
      this.setLanguage.unsubscribe();
    }
  }

  useLang(): void {
    let defaultLanguage = localStorage.getItem('language') || 'en';
    this.translateService.setDefaultLang(defaultLanguage);
    if (defaultLanguage == "de"){
      this.languageDeSelected = true;
      console.log("de", this.languageDeSelected)
    } else {
      this.languageDeSelected = false;
      console.log("en", this.languageDeSelected)
    }
  }
}
