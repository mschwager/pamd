import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManPagesComponent } from './man-pages.component';

describe('ManPagesComponent', () => {
  let component: ManPagesComponent;
  let fixture: ComponentFixture<ManPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
