import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BaseModule } from 'projects/base/src/app/base.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteTwoComponent } from './quote-two/quote-two.component';
import { QuoteOneComponent } from './quote-one/quote-one.component';
import { RandomComponent } from './random/random.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteTwoComponent,
    QuoteOneComponent,
    RandomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
