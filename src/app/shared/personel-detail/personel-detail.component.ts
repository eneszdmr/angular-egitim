import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-personel-detail',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './personel-detail.component.html',
  styleUrl: './personel-detail.component.scss'
})
export class PersonelDetailComponent {
  form: FormGroup;
  @Output() arama = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      personelID: [''],
      personelAdi: '',
      personelSoyadi: '',
    });
  }
  ara() {
    this.arama.emit(this.form.value);
  }

}
