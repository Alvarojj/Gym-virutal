import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEntrenamientoComponent } from './crear-entrenamiento.component';

describe('CrearEntrenamientoComponent', () => {
  let component: CrearEntrenamientoComponent;
  let fixture: ComponentFixture<CrearEntrenamientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearEntrenamientoComponent]
    });
    fixture = TestBed.createComponent(CrearEntrenamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
