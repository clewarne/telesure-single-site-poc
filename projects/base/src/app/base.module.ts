import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicSelectorComponent } from './dynamic-selector/dynamic-selector.component';
import { MenuComponent } from './menu/menu.component';
import { QuotePageComponent } from './pages/quote-page/quote-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DynamicSelectorComponent,
    QuotePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  exports: [
    MenuComponent
  ],
  bootstrap: [AppComponent]
})
export class BaseModule {
}
