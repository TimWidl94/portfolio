import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projekts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projekts.component.html',
  styleUrl: './projekts.component.scss'
})
export class ProjektsComponent {
exploreHtml = "Explore a selection of my work here - interact with projects to see my skills in action";
}
