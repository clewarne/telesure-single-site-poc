import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuoteOneComponent } from 'projects/autogen/src/app/quote-one/quote-one.component';
import { QuoteTwoComponent } from 'projects/autogen/src/app/quote-two/quote-two.component';

const routes: Routes = [
  { path: 'one', component: QuoteOneComponent },
  { path: 'two', component: QuoteTwoComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
