import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEntrenadoresComponent } from './login-entrenadores.component';

describe('LoginEntrenadoresComponent', () => {
  let component: LoginEntrenadoresComponent;
  let fixture: ComponentFixture<LoginEntrenadoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginEntrenadoresComponent]
    });
    fixture = TestBed.createComponent(LoginEntrenadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
