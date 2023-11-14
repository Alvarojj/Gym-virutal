import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarEntrenadorComponent } from './registrar-entrenador.component';

describe('RegistrarEntrenadorComponent', () => {
  let component: RegistrarEntrenadorComponent;
  let fixture: ComponentFixture<RegistrarEntrenadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarEntrenadorComponent]
    });
    fixture = TestBed.createComponent(RegistrarEntrenadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
