import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ServiceComponent } from './service/service.component';
import { BulkAddComponent } from './bulk-add/bulk-add.component';
import { ManPagesComponent } from './man-pages/man-pages.component';
import { HomepageComponent } from './homepage/homepage.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: 'man-pages',
    component: ManPagesComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    BulkAddComponent,
    ManPagesComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [BulkAddComponent]
})
export class AppModule { }
