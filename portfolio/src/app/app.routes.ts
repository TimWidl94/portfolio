import { Routes } from '@angular/router';
import { ImpressumComponent } from './impressum/impressum.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { MaincontentComponent } from './maincontent/maincontent.component';

export const routes: Routes = [
  { path: '', component: MaincontentComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent }
];
