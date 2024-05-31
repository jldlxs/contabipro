import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NfsePage } from './nfse.page';

describe('NfsePage', () => {
  let component: NfsePage;
  let fixture: ComponentFixture<NfsePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NfsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
