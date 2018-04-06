import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ServiceComponent } from './service/service.component';
import { BulkAddComponent } from './bulk-add/bulk-add.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    BulkAddComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [BulkAddComponent]
})
export class AppModule { }
