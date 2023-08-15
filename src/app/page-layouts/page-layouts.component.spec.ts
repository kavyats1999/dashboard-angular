import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLayoutsComponent } from './page-layouts.component';

describe('PageLayoutsComponent', () => {
  let component: PageLayoutsComponent;
  let fixture: ComponentFixture<PageLayoutsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageLayoutsComponent]
    });
    fixture = TestBed.createComponent(PageLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
