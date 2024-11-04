import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistorialesPage } from './historiales.page';

describe('HistorialesPage', () => {
  let component: HistorialesPage;
  let fixture: ComponentFixture<HistorialesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
