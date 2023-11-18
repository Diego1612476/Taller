import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroVideojuegoComponent } from './registro-videojuego.component';

describe('RegistroVideojuegoComponent', () => {
  let component: RegistroVideojuegoComponent;
  let fixture: ComponentFixture<RegistroVideojuegoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroVideojuegoComponent]
    });
    fixture = TestBed.createComponent(RegistroVideojuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
