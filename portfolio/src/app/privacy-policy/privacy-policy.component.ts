import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'privacy-policy',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent implements OnInit {
  constructor(
    private router: Router,
    public translateService: TranslateService
  ) {}

  ngOnInit() {
    this.router.navigateByUrl('/privacy-policy').then(() => {
      window.scrollTo(0, 0);
    });
  }
}
