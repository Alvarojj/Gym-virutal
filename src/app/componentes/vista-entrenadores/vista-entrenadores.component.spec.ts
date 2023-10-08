import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaEntrenadoresComponent } from './vista-entrenadores.component';

describe('VistaEntrenadoresComponent', () => {
  let component: VistaEntrenadoresComponent;
  let fixture: ComponentFixture<VistaEntrenadoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaEntrenadoresComponent]
    });
    fixture = TestBed.createComponent(VistaEntrenadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
