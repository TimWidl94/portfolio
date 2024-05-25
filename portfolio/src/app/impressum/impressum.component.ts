import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'impressum',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss',
})
export class ImpressumComponent implements OnInit {
  constructor(private router: Router, public translateService: TranslateService) {}

  ngOnInit() {
    this.router.navigateByUrl('/impressum').then(() => {
      window.scrollTo(0, 0);
    });
  }
}
