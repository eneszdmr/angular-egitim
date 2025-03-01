import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hata',
  imports: [],
  templateUrl: './hata.component.html',
  styleUrl: './hata.component.scss'
})
export class HataComponent {
  constructor(private router: Router) { }
  git() {
    this.router.navigate(['/login']);
  }

}
