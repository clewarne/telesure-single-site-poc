import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponentService } from 'projects/base/src/app/services/dynamic-component.service';

@Component({
  selector: 'base-quote-page',
  templateUrl: './quote-page.component.html',
  styleUrls: ['./quote-page.component.less']
})
export class QuotePageComponent implements OnInit {

  @ViewChild('container', { read: ViewContainerRef, static: true })
  container: ViewContainerRef;

  constructor(private componentService: DynamicComponentService, httpClient: HttpClient) {
    // httpClient.get('https://localhost/api/content/telesure-poc/quote-flow', );
  }

  ngOnInit(): void {
  }

  addDynamicComponent(selector: string) {
    this.componentService
      .getComponentBySelector(selector, () =>
        import('../../quote/quote.module').then(m => m.QuoteModule)
      )
      .then(componentRef => {
        this.container.insert(componentRef.hostView);
      });
  }

  getModuleLoader() {
    return () =>
      import('../../quote/quote.module').then(m => m.QuoteModule);
  }

}
