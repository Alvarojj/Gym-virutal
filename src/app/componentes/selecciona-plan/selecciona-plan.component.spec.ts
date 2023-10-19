import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionaPlanComponent } from './selecciona-plan.component';

describe('SeleccionaPlanComponent', () => {
  let component: SeleccionaPlanComponent;
  let fixture: ComponentFixture<SeleccionaPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeleccionaPlanComponent]
    });
    fixture = TestBed.createComponent(SeleccionaPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
