import { CommonModule } from '@angular/common';
import { ComponentFactoryResolver, NgModule } from '@angular/core';
import { BaseDynamicModule } from 'projects/base/src/app/base-dynamic-module';
import { QuoteOneComponent } from './quote-one/quote-one.component';
import { QuoteTwoComponent } from './quote-two/quote-two.component';


@NgModule({
  declarations: [
    QuoteOneComponent,
    QuoteTwoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class QuoteModule extends BaseDynamicModule {

  dynamicComponents = [QuoteOneComponent, QuoteTwoComponent];

  constructor(componentFactoryResolver: ComponentFactoryResolver) {
    super(componentFactoryResolver);
  }
}
