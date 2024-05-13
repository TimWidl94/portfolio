import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

burgerMenu:boolean = false;

toggleBurgerMenu(){
  if(!this.burgerMenu){
    this.burgerMenu = true;
    document.body.classList.add('noScroll');
  } else {
    this.burgerMenu = false;
    document.body.classList.remove('noScroll');
  }
}

}
