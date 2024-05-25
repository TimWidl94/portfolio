import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MaincontentComponent,
    TranslateModule,
    RouterLink,
    RouterLinkActive,
    ImpressumComponent,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit{

  title = 'portfolio';

  ngOnInit(): void {
    AOS.init();
  }
}
