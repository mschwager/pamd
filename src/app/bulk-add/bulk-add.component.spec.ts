import { FormsModule, NgForm } from '@angular/forms';
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
        FormsModule,
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

  it('should emit textarea data on submit', (done) => {
    const blob = 'auth required pam_unix.so';
    const form = <NgForm>{
      value: {
        textarea_input: blob
      }
    };

    component.eventEmitter.subscribe((input) => {
      expect(input).toEqual(blob);
      done();
    });

    component.onSubmit(form);
  });

});
