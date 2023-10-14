import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutinaComponent } from './rutina.component';

describe('RutinaComponent', () => {
  let component: RutinaComponent;
  let fixture: ComponentFixture<RutinaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RutinaComponent]
    });
    fixture = TestBed.createComponent(RutinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
