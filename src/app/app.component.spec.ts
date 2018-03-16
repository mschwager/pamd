import { FormsModule } from '@angular/forms';
import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { ServiceComponent } from './service/service.component';
import { DirectiveComponent } from './directive/directive.component';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ServiceComponent,
        DirectiveComponent
      ],
      imports: [
        FormsModule
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Pluggable Authentication Modules');
  }));

});
