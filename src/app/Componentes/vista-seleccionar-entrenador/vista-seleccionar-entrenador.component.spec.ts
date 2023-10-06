import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaSeleccionarEntrenadorComponent } from './vista-seleccionar-entrenador.component';

describe('VistaSeleccionarEntrenadorComponent', () => {
  let component: VistaSeleccionarEntrenadorComponent;
  let fixture: ComponentFixture<VistaSeleccionarEntrenadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaSeleccionarEntrenadorComponent]
    });
    fixture = TestBed.createComponent(VistaSeleccionarEntrenadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
