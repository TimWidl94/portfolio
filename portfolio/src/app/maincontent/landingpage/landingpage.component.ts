import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {
  constructor(public translateService: TranslateService) {}
}
