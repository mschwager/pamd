import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BulkAddComponent } from './bulk-add.component';

describe('BulkAddComponent', () => {
  let component: BulkAddComponent;
  let fixture: ComponentFixture<BulkAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BulkAddComponent
      ],
      imports: [
        NgbModule.forRoot()
      ],
      providers: [
        NgbActiveModal
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
