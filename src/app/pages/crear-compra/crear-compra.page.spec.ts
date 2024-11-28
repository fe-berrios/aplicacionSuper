import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearCompraPage } from './crear-compra.page';

describe('CrearCompraPage', () => {
  let component: CrearCompraPage;
  let fixture: ComponentFixture<CrearCompraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCompraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
