import { Routes } from '@angular/router';
import { ImpressumComponent } from './impressum/impressum.component';
import { MaincontentComponent } from './maincontent/maincontent.component';

export const routes: Routes = [
  { path: '', component: MaincontentComponent },
  { path: 'app-impressum', component: ImpressumComponent },
];
