import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PubNubAngular } from 'pubnub-angular2';

import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { AdminLinkDirective } from './admin-link.directive';
import { AdminComponent } from './admin/admin.component';
import { ConvertToEuroPipe } from './convert-to-euro.pipe';

import { BackendApiService } from './backend-api.service';

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    AdminLinkDirective,
    AdminComponent,
    ConvertToEuroPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [BackendApiService, PubNubAngular],
  bootstrap: [AppComponent]
})
export class AppModule { }
