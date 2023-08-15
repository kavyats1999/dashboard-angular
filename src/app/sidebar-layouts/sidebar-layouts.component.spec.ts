import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarLayoutsComponent } from './sidebar-layouts.component';

describe('SidebarLayoutsComponent', () => {
  let component: SidebarLayoutsComponent;
  let fixture: ComponentFixture<SidebarLayoutsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarLayoutsComponent]
    });
    fixture = TestBed.createComponent(SidebarLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
