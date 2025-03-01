import { Component, Input } from '@angular/core';
import { Personel } from '../../beans/personel';
import { PersonelService } from '../../service/personel.service';
import { ToastrService } from 'ngx-toastr';
import { PersonelAramaKriteri } from '../../beans/personel-arama-kriteri';

@Component({
  selector: 'app-personel-list',
  imports: [],
  templateUrl: './personel-list.component.html',
  styleUrl: './personel-list.component.scss'
})
export class PersonelListComponent {
  public personeller: Personel[] = [];
  private _aramaKriteri = new PersonelAramaKriteri();

  @Input()
  get aramaKriteri(): PersonelAramaKriteri { return this._aramaKriteri }
  set aramaKriteri(value: PersonelAramaKriteri) {
    this._aramaKriteri = value;
    this.listeyiGuncelle();
  }

  constructor(private personelService: PersonelService,
    private toastr: ToastrService) { }
  listeyiGuncelle() {
    this.personelService.getPersoneller(this._aramaKriteri).subscribe({
      next: (data) => {
        this.personeller = data;
      },
      error: (error) => {
        this.toastr.error('Personel bilgileri alınamadı');
      }
    });
  }
}