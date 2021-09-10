import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuotePageComponent } from 'projects/base/src/app/pages/quote-page/quote-page.component';

const routes: Routes = [
  { path: 'quote', component: QuotePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
