import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaProductosComponent } from './tabla-prodcutos.component';

describe('TablaProdcutosComponent', () => {
  let component: TablaProductosComponent;
  let fixture: ComponentFixture<TablaProductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaProductosComponent]
    });
    fixture = TestBed.createComponent(TablaProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
