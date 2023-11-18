import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCarritoComponent } from './tabla-carrito.component';

describe('TablaCarritoComponent', () => {
  let component: TablaCarritoComponent;
  let fixture: ComponentFixture<TablaCarritoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaCarritoComponent]
    });
    fixture = TestBed.createComponent(TablaCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
