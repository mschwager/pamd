import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveColor } from './directive';
import { ServiceComponent } from './service.component';

describe('ServiceComponent', () => {
  let component: ServiceComponent;
  let fixture: ComponentFixture<ServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ServiceComponent,
      ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('default directive count', () => {
    expect(component.getDirectiveLength()).toBe(1);
  });

  it('add directive', () => {
    component.addDirective();

    expect(component.getDirectiveLength()).toBe(2);
  });

  it('remove directive', () => {
    component.removeDirective(0);

    expect(component.getDirectiveLength()).toBe(0);
  });

  it('set directive color', () => {
    component.setDirectiveColor(0, DirectiveColor.SUCCESS);

    expect(component.directives[0].color).toBe(DirectiveColor.SUCCESS);
  });

});
