import { Component, OnInit } from '@angular/core';
import { QuoteOneComponent as BaseComponent } from 'projects/base/src/app/quote-one/quote-one.component';

@Component({
  selector: 'ag-quote-one',
  templateUrl: '../../../../base/src/app/quote-one/quote-one.component.html',
  styleUrls: ['../../../../base/src/app/quote-one/quote-one.component.less', './quote-one.component.less']
})
export class QuoteOneComponent extends BaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
