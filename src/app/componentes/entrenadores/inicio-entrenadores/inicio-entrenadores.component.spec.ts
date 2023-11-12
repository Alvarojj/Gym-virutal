import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioEntrenadoresComponent } from './inicio-entrenadores.component';

describe('InicioEntrenadoresComponent', () => {
  let component: InicioEntrenadoresComponent;
  let fixture: ComponentFixture<InicioEntrenadoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicioEntrenadoresComponent]
    });
    fixture = TestBed.createComponent(InicioEntrenadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
