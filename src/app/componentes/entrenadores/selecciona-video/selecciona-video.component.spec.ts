import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionaVideoComponent } from './selecciona-video.component';

describe('SeleccionaVideoComponent', () => {
  let component: SeleccionaVideoComponent;
  let fixture: ComponentFixture<SeleccionaVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeleccionaVideoComponent]
    });
    fixture = TestBed.createComponent(SeleccionaVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
