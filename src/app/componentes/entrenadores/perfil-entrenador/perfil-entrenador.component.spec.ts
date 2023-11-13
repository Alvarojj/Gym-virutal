import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilEntrenadorComponent } from './perfil-entrenador.component';

describe('PerfilEntrenadorComponent', () => {
  let component: PerfilEntrenadorComponent;
  let fixture: ComponentFixture<PerfilEntrenadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilEntrenadorComponent]
    });
    fixture = TestBed.createComponent(PerfilEntrenadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
