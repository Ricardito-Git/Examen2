import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCompras } from './tabla-compras';

describe('TablaCompras', () => {
  let component: TablaCompras;
  let fixture: ComponentFixture<TablaCompras>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaCompras]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaCompras);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});