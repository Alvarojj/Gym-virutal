import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionaUsuarioComponent } from './selecciona-usuario.component';

describe('SeleccionaUsuarioComponent', () => {
  let component: SeleccionaUsuarioComponent;
  let fixture: ComponentFixture<SeleccionaUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeleccionaUsuarioComponent]
    });
    fixture = TestBed.createComponent(SeleccionaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
