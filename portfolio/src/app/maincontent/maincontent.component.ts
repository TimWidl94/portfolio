import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { ProjektsComponent } from './projekts/projekts.component';

@Component({
  selector: 'app-maincontent',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    LandingpageComponent,
    AboutMeComponent,
    MySkillsComponent,
    ProjektsComponent,
  ],
  templateUrl: './maincontent.component.html',
  styleUrl: './maincontent.component.scss',
})
export class MaincontentComponent {}
