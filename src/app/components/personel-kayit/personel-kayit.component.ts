import { Component } from '@angular/core';
import { PersonelDetailComponent } from "../../shared/personel-detail/personel-detail.component";
import { PersonelListComponent } from "../../shared/personel-list/personel-list.component";
import { PersonelAramaKriteri } from '../../beans/personel-arama-kriteri';

@Component({
  selector: 'app-personel-kayit',
  imports: [PersonelDetailComponent, PersonelListComponent],
  templateUrl: './personel-kayit.component.html',
  styleUrl: './personel-kayit.component.scss'
})
export class PersonelKayitComponent {
  aramaKriteri: PersonelAramaKriteri = new PersonelAramaKriteri();

  arama(value: PersonelAramaKriteri) {
    this.aramaKriteri = value;
  }

}
