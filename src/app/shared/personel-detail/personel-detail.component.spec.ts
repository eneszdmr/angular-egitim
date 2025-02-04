import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonelDetailComponent } from './personel-detail.component';

describe('PersonelDetailComponent', () => {
  let component: PersonelDetailComponent;
  let fixture: ComponentFixture<PersonelDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonelDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonelDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
