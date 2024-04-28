import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  introduction =
    'Hi, I am a Front-end developer based in Erding near Munic, Germany. I am happy that you visited my site to look about my skills and see how i can bring your company forwards with you.';
}
